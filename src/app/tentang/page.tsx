import type { Metadata } from "next";
import { Backdrop } from "@/components/backdrop";
import { Marquee } from "@/components/marquee";
import { Card, Eyebrow, Section, SectionHeading } from "@/components/section";
import { FinalCta } from "@/components/cta";
import { about, proof, stack } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Athera Digital Solution membangun sistem bisnis untuk dipakai, bukan untuk dipresentasikan. Setiap klaim teknis punya pengukuran di belakangnya.",
  alternates: { canonical: "/tentang" },
};

export default function TentangPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Backdrop />
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <Eyebrow>Tentang kami</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {about.title}
          </h1>
          <div className="mt-8 grid gap-5 text-base leading-relaxed text-muted lg:max-w-4xl lg:grid-cols-1">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Prinsip" title="Empat kebiasaan yang menentukan hasilnya" />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {about.highlights.map((item, i) => (
            <Card key={item.title} as="li" className="ath-reveal p-7">
              <p className="font-mono text-xs tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Bukti"
          title="Angka yang kami pakai untuk menilai diri sendiri"
          description={proof.note}
        />
        <dl className="ath-reveal mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {proof.items.map((item) => (
            <div key={item.label} className="flex flex-col-reverse bg-surface-raised px-6 py-8">
              <dt className="mt-2 text-sm text-muted">{item.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight">
                {item.value.toLocaleString("id-ID", {
                  minimumFractionDigits: item.decimals,
                  maximumFractionDigits: item.decimals,
                })}
                {item.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Teknologi"
          title="Yang kami pakai, dan yang kami rawat"
          description="Kami memilih teknologi yang bisa dirawat jangka panjang dan dokumentasinya terbuka — supaya Anda tidak terkunci pada satu pihak, termasuk pada kami."
        />
        <div className="ath-reveal mt-12">
          <Marquee items={stack} />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
