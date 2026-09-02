import Link from "next/link";
import { company, nav } from "@/lib/site";
import { Wordmark } from "@/components/wordmark";
import { NavLink } from "@/components/nav-link";

/**
 * Menu di layar kecil memakai elemen <details> bawaan HTML, sehingga tetap
 * bisa dibuka meski JavaScript gagal dimuat.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
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
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/kontak"
          className="ath-sheen hidden overflow-hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:inline-block"
        >
          Hubungi kami
        </Link>

        <details className="group relative md:hidden">
          <summary
            className="flex cursor-pointer list-none items-center gap-2 rounded-md border border-border px-3 py-2 text-sm marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Buka menu"
          >
            <span
              aria-hidden="true"
              className="flex w-4 flex-col gap-1 [&>span]:h-px [&>span]:w-full [&>span]:bg-foreground"
            >
              <span />
              <span />
              <span />
            </span>
            Menu
          </summary>
          <ul className="absolute right-0 mt-2 w-60 rounded-xl border border-border bg-surface-raised p-2 shadow-2xl shadow-black/50">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-1 border-t border-border pt-1">
              <Link
                href="/kontak"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-accent"
              >
                Hubungi kami
              </Link>
            </li>
          </ul>
        </details>
      </div>
    </header>
  );
}
