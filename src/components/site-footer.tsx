import Link from "next/link";
import { company, nav } from "@/lib/site";
import { products } from "@/lib/products";
import { Wordmark } from "@/components/wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {company.tagline}. ERP, analitik, dan otomasi yang berjalan di
              atas data Anda sendiri — dibangun dan dirawat oleh satu tim.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-14">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Produk
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/produk/${product.slug}`}
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Navigasi
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Kontak
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {company.email}
                  </a>
                </li>
                {company.phone ? (
                  <li className="text-muted">{company.phone}</li>
                ) : null}
                {company.address ? (
                  <li className="max-w-xs text-muted">{company.address}</li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted">
          &copy; {year} {company.name}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
