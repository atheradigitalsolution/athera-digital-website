import type { Metadata } from "next";
import Link from "next/link";
import { Backdrop } from "@/components/backdrop";
import { Card, Eyebrow, Section } from "@/components/section";
import { products } from "@/lib/products";
import { company, processSteps, registration } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pendaftaran terkirim",
  description: "Pendaftaran Anda sudah masuk ke antrean onboarding ATHERA.",
  robots: { index: false, follow: true },
};

export default function TerkirimPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Backdrop />
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <Eyebrow>Terkirim</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {registration.successTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {registration.successBody}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/produk"
              className="ath-sheen overflow-hidden rounded-full bg-accent px-7 py-3.5 text-center text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
            >
              Sambil menunggu, lihat produk
            </Link>
            <a
              href={`mailto:${company.email}`}
              className="rounded-full border border-border px-7 py-3.5 text-center text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
            >
              Ada yang ingin ditambahkan? {company.email}
            </a>
          </div>
        </div>
      </section>

      <Section>
        <h2 className="ath-reveal text-sm font-semibold uppercase tracking-wider text-muted">
          Yang terjadi berikutnya
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number} className="ath-reveal relative pl-5">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-accent/60 to-transparent"
              />
              <p className="font-mono text-xs tracking-[0.2em] text-accent">{step.number}</p>
              <h3 className="mt-3 text-base font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section bordered={false}>
        <h2 className="ath-reveal text-sm font-semibold uppercase tracking-wider text-muted">
          Bacaan sambil menunggu
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <Card key={product.slug} as="li" className="ath-reveal p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-accent">{product.index}</p>
              <h3 className="mt-3 text-base font-semibold tracking-tight">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{product.tagline}</p>
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
