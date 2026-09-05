import type { Metadata } from "next";
import { ThinPage } from "@/components/thin-page";
import { thinPages } from "@/lib/site";

/**
 * `noindex` selama halamannya belum punya isi. Tidak ada yang perlu diperingkat,
 * dan halaman kosong yang terindeks menarik pengunjung ke jalan buntu. Hapus
 * baris `robots` ini bersamaan dengan menambahkan rutenya ke sitemap, bukan
 * salah satunya saja.
 */
export const metadata: Metadata = {
  title: thinPages.karir.title,
  description: thinPages.karir.lead,
  alternates: { canonical: thinPages.karir.slug },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ThinPage content={thinPages.karir} />;
}
