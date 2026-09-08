import Image from "next/image";

import { company } from "@/lib/site";

/**
 * Logo ATHERA. Dua varian dari satu berkas sumber yang sama:
 *
 * - `mark`   — tanda saja, disandingkan dengan nama yang diset sebagai TEKS.
 *              Dipakai di header. Namanya tetap teks dan bukan gambar supaya
 *              tetap tajam pada setiap kerapatan layar, ikut ukuran font
 *              pengguna, dan terbaca pembaca layar sebagai nama, bukan alt.
 * - `lockup` — tanda dan nama sekaligus, dari berkas logo yang utuh. Dipakai di
 *              tempat yang memberinya ruang, seperti footer.
 *
 * `unoptimized` DISENGAJA. Pengoptimal Next menegosiasikan format lewat header
 * Accept, dan peramban yang tidak menawarkan WebP dilayani JPEG — format tanpa
 * kanal alfa, sehingga latar transparan logo berubah jadi kotak hitam di atas
 * latar situs. Berkasnya sudah berukuran render × 2 dan hanya 20 KB, jadi tidak
 * ada yang bisa dihemat pengoptimal di sini; yang ada hanya format yang bisa ia
 * rusak. Diperiksa dengan `curl -H 'Accept: image/png,*\/*'` pada /_next/image.
 *
 * Berkas logonya adalah gambar bertepi lembut (gradasi, pendar, cincin orbit),
 * bukan bentuk geometri datar — jadi ia dipasang sebagai raster ber-alfa, bukan
 * ditiru ulang sebagai SVG. Latarnya sudah dibuat transparan, sehingga ia duduk
 * di atas latar apa pun tanpa kotak gelap di sekelilingnya.
 */
export function Wordmark({
  className = "",
  variant = "mark",
}: {
  className?: string;
  variant?: "mark" | "lockup";
}) {
  if (variant === "lockup") {
    return (
      <Image
        src="/athera-logo.webp"
        alt={company.name}
        width={480}
        height={329}
        unoptimized
        className={`h-auto w-44 ${className}`}
      />
    );
  }

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/athera-mark.webp"
        alt=""
        aria-hidden="true"
        width={270}
        height={174}
        priority
        unoptimized
        className="h-7 w-auto shrink-0"
      />
      <span className="text-base font-semibold tracking-[0.18em]">
        {company.shortName}
      </span>
    </span>
  );
}
