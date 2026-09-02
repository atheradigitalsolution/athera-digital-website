import Link from "next/link";
import { Card } from "@/components/section";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const preview = product.status === "Pratinjau terbatas";

  return (
    <Card as="li" className="ath-reveal flex flex-col p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-accent">
          {product.index}
        </span>
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

      <h3 className="mt-5 text-xl font-semibold tracking-tight">{product.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{product.tagline}</p>

      <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-6 text-sm text-muted">
        {product.highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
            />
            {item}
          </li>
        ))}
      </ul>

      <Link
        href={`/produk/${product.slug}`}
        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-2"
      >
        Pelajari {product.name}
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </Card>
  );
}
