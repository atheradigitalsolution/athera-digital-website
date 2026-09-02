import type { Metadata } from "next";
import Link from "next/link";
import { Backdrop } from "@/components/backdrop";
import { Card, Eyebrow, Section } from "@/components/section";
import { company, contact, processSteps } from "@/lib/site";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Ceritakan kondisi sistem Anda sekarang dan apa yang paling menghambat. Balasan pertama kami berisi pertanyaan, bukan proposal 40 halaman.",
  alternates: { canonical: "/kontak" },
};

export default function KontakPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Backdrop />
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Kontak</Eyebrow>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              {contact.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {contact.description}
            </p>

            <ul className="mt-9 space-y-3.5 text-sm leading-relaxed text-muted">
              {contact.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${company.email}?subject=${encodeURIComponent("Konsultasi sistem — dari website")}`}
                className="ath-sheen overflow-hidden rounded-full bg-accent px-7 py-3.5 text-center text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
              >
                Kirim email
              </a>
              <Link
                href="/produk"
                className="rounded-full border border-border px-7 py-3.5 text-center text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
              >
                Lihat produk dulu
              </Link>
            </div>
          </div>

          <Card className="p-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Detail kontak
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-muted">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${company.email}`}
                    className="font-medium text-accent transition-colors hover:text-accent-2"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              {company.phone ? (
                <div>
                  <dt className="text-muted">Telepon</dt>
                  <dd className="mt-1 font-medium">{company.phone}</dd>
                </div>
              ) : null}
              {company.address ? (
                <div>
                  <dt className="text-muted">Alamat</dt>
                  <dd className="mt-1 font-medium">{company.address}</dd>
                </div>
              ) : null}
              <div>
                <dt className="text-muted">Waktu tanggap</dt>
                <dd className="mt-1 font-medium">Hari kerja, biasanya di bawah 1×24 jam</dd>
              </div>
            </dl>

            <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted">
              Berguna kalau disebutkan sejak awal: sistem apa yang sekarang
              dipakai, berapa orang yang memakainya, dan bagian mana yang paling
              sering membuat tim kembali ke spreadsheet.
            </p>
          </Card>
        </div>
      </section>

      <Section>
        <h2 className="ath-reveal text-sm font-semibold uppercase tracking-wider text-muted">
          Yang terjadi setelah Anda mengirim email
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number} className="ath-reveal relative pl-5">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-accent/60 to-transparent"
              />
              <p className="font-mono text-xs tracking-[0.2em] text-accent">
                {step.number}
              </p>
              <h3 className="mt-3 text-base font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section bordered={false}>
        <h2 className="ath-reveal text-sm font-semibold uppercase tracking-wider text-muted">
          Atau mulai dari salah satu produk
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <Card key={product.slug} as="li" className="ath-reveal p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-accent">
                {product.index}
              </p>
              <h3 className="mt-3 text-base font-semibold tracking-tight">
                {product.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {product.tagline}
              </p>
              <Link
                href={`/produk/${product.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-2"
              >
                Pelajari
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Card>
          ))}
        </ul>
      </Section>
    </>
  );
}
