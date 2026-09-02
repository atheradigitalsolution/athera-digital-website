import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Backdrop } from "@/components/backdrop";
import { CodeWindow } from "@/components/code-window";
import { Pipeline } from "@/components/pipeline";
import { Card, Eyebrow, Section, SectionHeading } from "@/components/section";
import { FinalCta } from "@/components/cta";
import { products, productBySlug } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(
  props: PageProps<"/produk/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = productBySlug(slug);

  if (!product) return { title: "Produk tidak ditemukan" };

  return {
    title: product.name,
    description: product.tagline,
    alternates: { canonical: `/produk/${product.slug}` },
    openGraph: {
      title: `${product.name} — ${product.tagline}`,
      description: product.summary,
      url: `/produk/${product.slug}`,
    },
  };
}

export default async function ProductPage(props: PageProps<"/produk/[slug]">) {
  const { slug } = await props.params;
  const product = productBySlug(slug);

  if (!product) notFound();

  const others = products.filter((item) => item.slug !== product.slug);
  const preview = product.status === "Pratinjau terbatas";

  return (
    <>
      {/* Hero produk */}
      <section className="relative overflow-hidden border-b border-border">
        <Backdrop />
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <Eyebrow>{`Produk ${product.index}`}</Eyebrow>
              <span
                className={`rounded-full border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider ${
                  preview
                    ? "border-[var(--warn)]/40 text-[var(--warn)]"
                    : "border-accent/40 text-accent"
                }`}
              >
                {product.status}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-foreground/90">{product.tagline}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {product.summary}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontak"
                className="ath-sheen overflow-hidden rounded-full bg-accent px-7 py-3.5 text-center text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
              >
                {preview ? "Ajukan akses pratinjau" : "Diskusikan penerapannya"}
              </Link>
              <Link
                href="/produk"
                className="rounded-full border border-border px-7 py-3.5 text-center text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
              >
                Lihat produk lain
              </Link>
            </div>
          </div>

          <CodeWindow
            title={product.terminal.title}
            lines={product.terminal.lines}
            className="w-full"
          />
        </div>
      </section>

      {/* Bukti */}
      <Section>
        <h2 className="ath-reveal text-sm font-semibold uppercase tracking-wider text-muted">
          Yang sudah terukur
        </h2>
        <dl className="ath-reveal mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {product.evidence.map((item) => (
            <div
              key={item.label}
              className="flex flex-col bg-surface-raised px-6 py-8"
            >
              <dt className="order-2 mt-2 text-sm font-medium text-foreground">
                {item.label}
              </dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight">
                {item.value}
              </dd>
              <dd className="order-3 mt-3 text-xs leading-relaxed text-muted">
                {item.note}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Alur */}
      <Section>
        <SectionHeading
          eyebrow="Alur kerja"
          title={`Bagaimana ${product.name} bekerja`}
        />
        <div className="ath-reveal mt-14">
          <Pipeline steps={product.pipeline} />
        </div>
      </Section>

      {/* Kemampuan */}
      <Section>
        <SectionHeading eyebrow="Kemampuan" title="Apa yang Anda dapatkan" />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {product.capabilities.map((item, i) => (
            <Card key={item.title} as="li" className="ath-reveal p-7">
              <p className="font-mono text-xs tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.body}</p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* Untuk siapa + batas */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Card className="ath-reveal p-8">
            <h2 className="text-lg font-semibold tracking-tight">Cocok untuk</h2>
            <ul className="mt-6 space-y-3.5 text-sm leading-relaxed text-muted">
              {product.forWho.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="ath-reveal border-[var(--warn)]/25 p-8">
            <h2 className="text-lg font-semibold tracking-tight">
              Batas yang kami sebut lebih dulu
            </h2>
            <ul className="mt-6 space-y-3.5 text-sm leading-relaxed text-muted">
              {product.limits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--warn)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Pertanyaan" title="Yang paling sering ditanyakan" />
        <div className="ath-reveal mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border">
          {product.faq.map((item) => (
            <details key={item.q} className="group bg-surface-raised">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-base font-medium marker:content-none hover:text-accent">
                {item.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Produk lain */}
      <Section>
        <h2 className="ath-reveal text-sm font-semibold uppercase tracking-wider text-muted">
          Produk lain
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {others.map((item) => (
            <Card key={item.slug} as="li" className="ath-reveal p-7">
              <p className="font-mono text-xs tracking-[0.2em] text-accent">
                {item.index}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {item.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {item.tagline}
              </p>
              <Link
                href={`/produk/${item.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-2"
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

      <FinalCta />
    </>
  );
}
