import type { MetadataRoute } from "next";
import { company, nav } from "@/lib/site";
import { products } from "@/lib/products";

const base = `https://${company.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  // SENGAJA TIDAK MEMUAT /blog, /studi-kasus, DAN /karir. Ketiganya menyatakan
  // bahwa isinya belum ada; halaman semacam itu tidak perlu diperingkat, dan
  // mengindeksnya berarti menarik pengunjung dari hasil pencarian ke jalan buntu.
  // Masing-masing membawa `robots: noindex` di halamannya sendiri. Ketika isinya
  // sudah ada, tambahkan rutenya DI SINI dan hapus `robots` di sana — keduanya
  // sekaligus, karena satu tanpa yang lain menghasilkan keadaan yang saling
  // membantah.
  const routes = [
    "/",
    ...nav.map((item) => item.href),
    ...products.map((product) => `/produk/${product.slug}`),
  ];

  return routes.map((route) => ({
    url: `${base}${route === "/" ? "" : route}`,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));
}
