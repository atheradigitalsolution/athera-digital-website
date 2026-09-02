import Link from "next/link";
import { Backdrop } from "@/components/backdrop";
import { Eyebrow } from "@/components/section";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <Backdrop />
      <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
          Halaman yang Anda cari tidak ada di sini
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          Mungkin tautannya sudah berubah. Silakan kembali ke beranda atau lihat
          daftar produk kami.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="ath-sheen overflow-hidden rounded-full bg-accent px-7 py-3.5 text-center text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
          >
            Kembali ke beranda
          </Link>
          <Link
            href="/produk"
            className="rounded-full border border-border px-7 py-3.5 text-center text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
          >
            Lihat produk
          </Link>
        </div>
      </div>
    </section>
  );
}
