import Link from "next/link";
import { Backdrop } from "@/components/backdrop";
import { Section } from "@/components/section";
import { FinalCta } from "@/components/cta";
import { company } from "@/lib/site";

type ThinPageContent = {
  title: string;
  lead: string;
  body: string[];
  links: { label: string; href: string }[];
};

/**
 * Satu tampilan untuk tiga halaman yang isinya adalah ketiadaan isi.
 *
 * Bentuknya sengaja sama dengan halaman lain — latar, tipografi, jarak — supaya
 * pengunjung yang sampai ke sini merasa berada di situs yang sama, bukan di
 * halaman galat. Yang membedakannya hanya satu: kalimat pembukanya menyatakan
 * apa yang TIDAK ada, di baris pertama, sebelum apa pun yang lain.
 *
 * `mailto:` tanpa alamat diisi dari `company.email` di sini, bukan ditulis di
 * `site.ts`. Alamatnya sudah ada satu kali di berkas itu; menyalinnya ke dalam
 * sebuah href adalah cara alamat kedua yang usang lahir.
 */
export function ThinPage({ content }: { content: ThinPageContent }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Backdrop />
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground sm:text-xl">
            {content.lead}
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl space-y-5">
          {content.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {content.links.map((link) => {
            const href = link.href === "mailto:" ? `mailto:${company.email}` : link.href;
            const external = href.startsWith("mailto:") || href.startsWith("http");
            return (
              <li key={href}>
                {external ? (
                  <a
                    href={href}
                    className="font-medium text-accent transition-colors hover:text-accent-2"
                  >
                    {link.label} →
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="font-medium text-accent transition-colors hover:text-accent-2"
                  >
                    {link.label} →
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}
