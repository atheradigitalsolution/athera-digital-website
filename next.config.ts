import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Menghasilkan bundel runtime minimal di .next/standalone, sehingga yang
  // di-deploy ke server hanya berkas yang benar-benar dibutuhkan.
  output: "standalone",
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
