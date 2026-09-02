import type { MetadataRoute } from "next";
import { company, nav } from "@/lib/site";
import { products } from "@/lib/products";

const base = `https://${company.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
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
