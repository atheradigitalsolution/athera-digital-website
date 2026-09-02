import type { Metadata } from "next";
import { Backdrop } from "@/components/backdrop";
import { Card, Eyebrow, Section, SectionHeading } from "@/components/section";
import { FinalCta } from "@/components/cta";
import { processSteps, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Implementasi dan migrasi, aplikasi web custom, infrastruktur dan operasional, serta audit dan penyelamatan proyek.",
  alternates: { canonical: "/layanan" },
};

export default function LayananPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Backdrop />
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <Eyebrow>Layanan</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Produk saja tidak cukup kalau tidak ada yang memasangnya
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Kami mengerjakan keseluruhannya — dari pemetaan proses sampai server
            dan email yang menopangnya — sehingga tidak ada bagian yang saling
            menunggu, dan tidak ada yang menyalahkan pihak lain saat ada masalah.
          </p>
        </div>
      </section>

      <Section>
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Card key={service.id} as="li" className="ath-reveal p-8">
              <p className="font-mono text-xs tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight">
                {service.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.summary}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-sm text-muted">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/70"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Cara kami bekerja"
          title="Empat tahap, tiap tahap menghasilkan sesuatu yang bisa dipakai"
          description="Kami tidak menjalankan proyek yang baru terlihat benar atau salah setelah berbulan-bulan. Setiap tahap punya hasil yang bisa dinilai sendiri."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      <FinalCta />
    </>
  );
}
