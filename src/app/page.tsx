import Link from "next/link";
import { Backdrop } from "@/components/backdrop";
import { CountUp } from "@/components/count-up";
import { FlowDiagram } from "@/components/flow-diagram";
import { Marquee } from "@/components/marquee";
import { Pipeline } from "@/components/pipeline";
import { ProductCard } from "@/components/product-card";
import { Card, Eyebrow, Section, SectionHeading } from "@/components/section";
import { FinalCta } from "@/components/cta";
import { products } from "@/lib/products";
import {
  about,
  compliance,
  hero,
  processSteps,
  proof,
  services,
  stack,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <Backdrop />
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={hero.primaryCta.href}
                className="ath-sheen overflow-hidden rounded-full bg-accent px-7 py-3.5 text-center text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="rounded-full border border-border px-7 py-3.5 text-center text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>

            <p className="mt-7 flex items-center gap-2.5 font-mono text-xs text-muted">
              <span
                aria-hidden="true"
                className="ath-pulse inline-block size-2 rounded-full bg-[var(--ok)]"
              />
              {hero.status}
            </p>
          </div>

          <FlowDiagram className="w-full" />
        </div>
      </section>

      {/* Angka pembuka */}
      <Section>
        <div className="ath-reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Angka yang bisa ditelusuri
          </h2>
          <p className="font-mono text-xs text-muted">{proof.note}</p>
        </div>

        <dl className="ath-reveal mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {proof.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col-reverse bg-surface-raised px-6 py-8"
            >
              <dt className="mt-2 text-sm text-muted">{item.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                <CountUp
                  value={item.value}
                  decimals={item.decimals}
                  suffix={item.suffix}
                />
              </dd>
            </div>
          ))}
        </dl>

        <div className="ath-reveal mt-10">
          <Marquee items={stack} />
        </div>
      </Section>

      {/* Produk */}
      <Section id="produk">
        <SectionHeading
          eyebrow="Tiga produk"
          title="Satu platform, dipakai dari tiga arah berbeda"
          description="Ketiganya berdiri di atas data yang sama dan aturan akses yang sama. Anda bisa mulai dari satu, dan menambah yang lain tanpa memindahkan data lagi."
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </ul>
      </Section>

      {/* Cara kerja */}
      <Section>
        <SectionHeading
          eyebrow="Cara kerjanya"
          title="Dari transaksi di ERP sampai angka di layar"
          description="Perubahan dibaca dari log transaksi database — bukan dengan menanyai ulang tabel operasional — lalu disamarkan, disimpan, dimodelkan, dan disajikan beserta stempel kesegarannya."
        />

        <div className="ath-reveal mt-14">
          <Pipeline steps={products[0].pipeline} />
        </div>

        <div className="ath-reveal mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Tidak membebani ERP",
              body: "Dasbor tidak pernah menembak database operasional. Kueri analitik jatuh ke gudang terpisah, sehingga tim Anda tetap bekerja di sistem yang responsif.",
            },
            {
              title: "Penghapusan ikut terbawa",
              body: "Data yang dihapus di ERP hilang juga dari gudang. Sinkronisasi berbasis kolom tanggal ubah tidak bisa melakukan ini.",
            },
            {
              title: "Basi terlihat basi",
              body: "Kesegaran dibaca dari catatan pipeline, bukan dari jam server. Pipeline yang mati tampak mati, bukan tampak sehat dengan angka kemarin.",
            },
          ].map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Kepatuhan */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={compliance.eyebrow}
              title={compliance.title}
              description={compliance.description}
            />
            <Link
              href="/kepatuhan"
              className="ath-reveal mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-2"
            >
              Lihat posisi kepatuhan kami
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ul className="ath-reveal grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {compliance.numbers.map((item) => (
              <li key={item.label} className="bg-surface-raised px-6 py-7">
                <p className="text-3xl font-semibold tracking-tight">{item.value}</p>
                <p className="mt-1.5 text-sm text-muted">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Layanan */}
      <Section>
        <SectionHeading
          eyebrow="Layanan"
          title="Produk saja tidak cukup kalau tidak ada yang memasangnya"
          description="Selain ketiga produk di atas, kami mengerjakan bagian yang membuatnya benar-benar berjalan di tempat Anda."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.id} as="li" className="ath-reveal p-7">
              <h3 className="text-lg font-semibold tracking-tight">{service.name}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {service.summary}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted">
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

      {/* Proses */}
      <Section>
        <SectionHeading
          eyebrow="Cara kami bekerja"
          title="Empat tahap, tiap tahap menghasilkan sesuatu yang bisa dipakai"
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

      {/* Tentang singkat */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading title={about.title} eyebrow="Tentang kami" />
          <div className="ath-reveal space-y-5 text-base leading-relaxed text-muted">
            {about.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-2"
            >
              Selengkapnya tentang cara kami bekerja
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
