import Link from "next/link";
import { company, nav } from "@/lib/site";
import { Wordmark } from "@/components/wordmark";

/**
 * Header tanpa JavaScript sama sekali. Menu di layar kecil memakai elemen
 * <details> bawaan HTML, sehingga tidak butuh client component.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label={`${company.name}, kembali ke beranda`}
        >
          <Wordmark />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`mailto:${company.email}`}
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:inline-block"
        >
          Hubungi kami
        </a>

        <details className="relative md:hidden">
          <summary
            className="flex cursor-pointer list-none items-center gap-2 rounded-md border border-border px-3 py-2 text-sm marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Buka menu"
          >
            Menu
          </summary>
          <ul className="absolute right-0 mt-2 w-56 rounded-lg border border-border bg-surface-raised p-2 shadow-lg">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-1 border-t border-border pt-1">
              <a
                href={`mailto:${company.email}`}
                className="block rounded-md px-3 py-2 text-sm font-medium text-accent"
              >
                Hubungi kami
              </a>
            </li>
          </ul>
        </details>
      </div>
    </header>
  );
}
