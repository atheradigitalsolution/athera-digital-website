import type { Metadata } from "next";
import Link from "next/link";
import { Backdrop } from "@/components/backdrop";
import { Card, Eyebrow, Section, SectionHeading } from "@/components/section";
import { appShortcuts, pricing } from "@/lib/site";
import { products, type ProductSlug } from "@/lib/products";
import {
  CONTACT_LABEL,
  formatPrice,
  getPublishedPlans,
  isRecurringAmount,
  planByCode,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Harga",
  description:
    "Langganan bulanan per tenant untuk ATHERA Insight, ATHERA ERP, dan ATHERA Agent, dibaca langsung dari katalog harga kami. Biaya implementasi dihitung terpisah mengikuti ruang lingkup.",
  alternates: { canonical: "/harga" },
};

/**
 * Harga dibaca saat request, bukan saat build: satu perubahan di konsol admin
 * langsung terlihat di halaman ini tanpa deploy ulang.
 */
export const dynamic = "force-dynamic";

/**
 * Pemetaan produk ke kode paket di registry. Ini pemetaan, bukan teks — karena
 * itu ia di sini dan bukan di `site.ts`. Produk yang dipetakan ke `null` memang
 * dijual custom, sehingga kartunya berbunyi "Hubungi kami" secara sengaja.
 */
const PLAN_CODE: Record<ProductSlug, string | null> = {
  insight: "insight",
  odoo: "odoo_care",
  agent: null,
};

export default async function HargaPage() {
  const plans = await getPublishedPlans();
  const suite = planByCode(plans, "suite");

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Backdrop />
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <Eyebrow>{pricing.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {pricing.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {pricing.description}
          </p>
        </div>
      </section>

      <Section>
        <ul className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => {
            const code = PLAN_CODE[product.slug];
            const plan = code ? planByCode(plans, code) : undefined;
            const priceLabel = plan
              ? formatPrice(plan.price_month, plan.currency)
              : CONTACT_LABEL;
            // Nama paket ditampilkan hanya kalau ia menambah keterangan; kalau
            // registry menamainya persis seperti produknya, mengulanginya di
            // bawah harga tidak memberi tahu apa-apa.
            const planLabel = plan
              ? plan.display_name === product.name
                ? null
                : plan.display_name
              : pricing.customPlanLabel;

            return (
              <Card
                key={product.slug}
                as="li"
                className="ath-reveal flex flex-col p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs tracking-[0.2em] text-accent">
                    {product.index}
                  </p>
                  <p className="rounded-full border border-border px-3 py-1 text-[0.7rem] uppercase tracking-wider text-muted">
                    {product.status}
                  </p>
                </div>

                <h2 className="mt-4 text-xl font-semibold tracking-tight">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {product.tagline}
                </p>

                <p className="mt-7 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-3xl font-semibold tracking-tight">
                    {priceLabel}
                  </span>
                  {isRecurringAmount(plan) ? (
                    <span className="text-sm text-muted">{pricing.perMonth}</span>
                  ) : null}
                </p>
                {planLabel ? (
                  <p className="mt-1.5 text-xs text-muted">{planLabel}</p>
                ) : null}

                <ul className="mt-6 space-y-3 border-t border-border pt-6 text-sm leading-relaxed text-muted">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs leading-relaxed text-muted">
                  {pricing.implementation}
                </p>

                <div className="mt-7 flex flex-1 items-end">
                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-2"
                  >
                    {pricing.ctaLabel}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </Card>
            );
          })}
        </ul>
      </Section>

      <Section>
        <Card className="ath-reveal p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div>
              <Eyebrow>{pricing.suite.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {suite ? suite.display_name : pricing.suite.fallbackName}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {pricing.suite.description}
              </p>
              <p className="mt-6 text-xs leading-relaxed text-muted">
                {pricing.implementation}
              </p>
            </div>

            <div className="flex flex-col justify-center border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
              <p className="text-3xl font-semibold tracking-tight">
                {suite ? formatPrice(suite.price_month, suite.currency) : CONTACT_LABEL}
              </p>
              <p className="mt-1.5 text-xs text-muted">
                {products.map((product) => product.name).join(" · ")}
              </p>
              <Link
                href="/kontak"
                className="ath-sheen mt-7 overflow-hidden rounded-full bg-accent px-7 py-3.5 text-center text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
              >
                {pricing.ctaLabel}
              </Link>
            </div>
          </div>
        </Card>
      </Section>

      <Section>
        <SectionHeading title={pricing.notesTitle} />
        <ul className="ath-reveal mt-10 grid gap-5 md:grid-cols-2">
          {pricing.notes.map((note) => (
            <li
              key={note}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
              />
              {note}
            </li>
          ))}
        </ul>
      </Section>

      <Section bordered={false}>
        <Eyebrow>{appShortcuts.eyebrow}</Eyebrow>
        <h2 className="ath-reveal mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          {appShortcuts.title}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {appShortcuts.items.map((item) => (
            <Card key={item.href} as="li" className="ath-reveal p-6">
              <a
                href={item.href}
                className="text-base font-semibold tracking-tight text-accent transition-colors hover:text-accent-2"
              >
                {item.label}
              </a>
              <p className="mt-2 text-sm text-muted">{item.note}</p>
            </Card>
          ))}
        </ul>
      </Section>
    </>
  );
}
