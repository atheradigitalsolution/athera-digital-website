import type { Metadata } from "next";
import Link from "next/link";
import { Backdrop } from "@/components/backdrop";
import { Card, Eyebrow, Section, SectionHeading } from "@/components/section";
import { FinalCta } from "@/components/cta";
import { compliance } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kepatuhan",
  description:
    "Bagaimana kewajiban UU 27/2022 tentang Pelindungan Data Pribadi kami terjemahkan menjadi mekanisme di lapisan data: klasifikasi wajib, penyamaran saat pemuatan, dan akses yang ditegakkan mesin database.",
  alternates: { canonical: "/kepatuhan" },
};

export default function KepatuhanPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Backdrop />
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <Eyebrow>{compliance.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {compliance.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {compliance.description}
          </p>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {compliance.numbers.map((item) => (
              <li key={item.label} className="bg-surface-raised px-6 py-7">
                <p className="text-3xl font-semibold tracking-tight">{item.value}</p>
                <p className="mt-1.5 text-sm text-muted">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kelas data */}
      <Section>
        <SectionHeading
          eyebrow="Klasifikasi"
          title="Lima kelas data, dan apa yang terjadi pada masing-masing"
          description="Setiap kolom yang direplikasi punya kelas. Kelasnya menentukan perlakuannya secara otomatis — bukan menjadi catatan di dokumen yang harus diingat orang."
        />

        <div className="ath-reveal mt-12 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Lima kelas data beserta perlakuannya
            </caption>
            <thead>
              <tr className="border-b border-border bg-surface">
                <th scope="col" className="px-6 py-4 font-semibold">Kelas</th>
                <th scope="col" className="px-6 py-4 font-semibold">Isinya</th>
                <th scope="col" className="px-6 py-4 font-semibold">Perlakuan</th>
              </tr>
            </thead>
            <tbody>
              {compliance.classes.map((item) => (
                <tr key={item.name} className="border-b border-border last:border-0">
                  <th scope="row" className="px-6 py-4 align-top font-mono text-xs uppercase tracking-wider text-accent">
                    {item.name}
                  </th>
                  <td className="px-6 py-4 align-top text-muted">{item.meaning}</td>
                  <td className="px-6 py-4 align-top text-muted">{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Jaminan */}
      <Section>
        <SectionHeading
          eyebrow="Mekanisme"
          title="Empat hal yang tidak bisa lupa dijalankan"
          description="Kepatuhan yang bergantung pada kedisiplinan orang akan gagal pada hari yang paling sibuk. Berikut bagian yang kami pindahkan ke mekanisme."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {compliance.guarantees.map((item, i) => (
            <Card key={item.title} as="li" className="ath-reveal p-7">
              <p className="font-mono text-xs tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.body}</p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* Yang belum otomatis */}
      <Section>
        <SectionHeading
          eyebrow="Yang belum otomatis"
          title="Bagian ini kami sebut sendiri, sebelum ditanya"
        />

        <ul className="mt-12 grid gap-6">
          {compliance.gaps.map((item) => (
            <Card key={item.title} as="li" className="ath-reveal border-[var(--warn)]/25 p-8">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-2 shrink-0 rounded-full bg-[var(--warn)]"
                />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </ul>

        <p className="ath-reveal mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          Halaman ini menjelaskan mekanisme teknis yang kami terapkan; ia bukan
          nasihat hukum. Kewajiban sebagai pengendali data tetap berada pada
          perusahaan Anda, dan kami senang membahasnya bersama penasihat hukum
          Anda.{" "}
          <Link href="/kontak" className="text-accent hover:text-accent-2">
            Hubungi kami
          </Link>{" "}
          bila Anda ingin menelaah detailnya.
        </p>
      </Section>

      <FinalCta />
    </>
  );
}
