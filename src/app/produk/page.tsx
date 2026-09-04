import type { Metadata } from "next";
import Link from "next/link";
import { Backdrop } from "@/components/backdrop";
import { Marquee } from "@/components/marquee";
import { ProductCard } from "@/components/product-card";
import { Card, Eyebrow, Section, SectionHeading } from "@/components/section";
import { FinalCta } from "@/components/cta";
import { products } from "@/lib/products";
import { stack } from "@/lib/site";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "ATHERA Insight, ATHERA ERP, dan ATHERA Agent: tiga produk di atas satu platform data, berjalan di server Anda sendiri.",
  alternates: { canonical: "/produk" },
};

const comparison = [
  {
    label: "Untuk pertanyaan",
    values: [
      "Bagaimana angkanya bergerak?",
      "Bagaimana transaksinya dicatat?",
      "Berapa angkanya, sekarang juga?",
    ],
  },
  {
    label: "Dipakai oleh",
    values: ["Manajemen dan analis", "Seluruh tim operasional", "Siapa pun yang bertanya"],
  },
  {
    label: "Letak data",
    values: ["Gudang data terpisah", "Database ERP", "Tidak menyimpan apa pun"],
  },
  {
    label: "Status",
    values: ["Produksi", "Produksi", "Pratinjau terbatas"],
  },
];

export default function ProdukPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Backdrop />
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <Eyebrow>Produk</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Tiga produk, satu sumber kebenaran
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Insight menjawab pertanyaan tentang angka, ERP mencatat transaksinya,
            dan Agent membuat keduanya bisa ditanya dengan bahasa biasa. Ketiganya
            memakai data dan aturan akses yang sama, sehingga menambah satu produk
            tidak berarti memindahkan data lagi.
          </p>

          <div className="mt-10">
            <Marquee items={stack} />
          </div>
        </div>
      </section>

      <Section>
        <ul className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Perbandingan"
          title="Mana yang Anda butuhkan lebih dulu?"
          description="Sebagian besar klien mulai dari ERP kalau pencatatannya belum rapi, atau dari Insight kalau pencatatannya sudah jalan tapi angkanya masih disusun manual."
        />

        <div className="ath-reveal mt-12 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Perbandingan ATHERA Insight, ATHERA ERP, dan ATHERA Agent
            </caption>
            <thead>
              <tr className="border-b border-border bg-surface">
                <th scope="col" className="px-6 py-4 font-medium text-muted">
                  &nbsp;
                </th>
                {products.map((product) => (
                  <th
                    key={product.slug}
                    scope="col"
                    className="px-6 py-4 font-semibold tracking-tight"
                  >
                    <Link
                      href={`/produk/${product.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {product.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <th
                    scope="row"
                    className="bg-surface px-6 py-4 align-top font-medium text-muted"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={i} className="px-6 py-4 align-top text-muted">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Card className="ath-reveal mt-8 p-6">
          <p className="text-sm leading-relaxed text-muted">
            Tidak yakin harus mulai dari mana? Ceritakan kondisi sistem Anda
            sekarang. Kalau jawabannya ternyata &ldquo;belum perlu apa-apa dari
            kami&rdquo;, itu juga jawaban yang akan kami sampaikan.
          </p>
          <Link
            href="/harga"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-2"
          >
            Lihat harga langganan
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Card>
      </Section>

      <FinalCta />
    </>
  );
}
