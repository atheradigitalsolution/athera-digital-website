"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Tautan navigasi dengan penanda halaman aktif.
 *
 * Tanpa JavaScript tautannya tetap berfungsi penuh; yang hilang hanya sorotan
 * halaman aktif. Menu di layar kecil memakai <details>, jadi tidak bergantung
 * pada komponen ini.
 */
export function NavLink({
  href,
  children,
  className = "",
  activeClassName = "text-foreground",
  inactiveClassName = "text-muted hover:text-foreground",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${active ? activeClassName : inactiveClassName} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0"}`}
      />
    </Link>
  );
}
