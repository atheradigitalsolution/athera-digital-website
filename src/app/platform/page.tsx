import type { Metadata } from "next";
import { Backdrop } from "@/components/backdrop";
import { Card, Eyebrow, Section, SectionHeading } from "@/components/section";
import { FinalCta } from "@/components/cta";
import { platform } from "@/lib/site";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Fondasi bersama di bawah ketiga produk ATHERA: satu login untuk semua layanan, akses yang tertutup secara bawaan, pemisahan antar klien di tingkat penyimpanan, dan backup yang pemulihannya diuji.",
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Backdrop />
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <Eyebrow>{platform.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {platform.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {platform.description}
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Yang ada di bawahnya"
          title="Enam hal yang menentukan apakah sistemnya masih bisa dipercaya di tahun kedua"
          description="Setiap butir menyebut keadaannya hari ini. Yang belum aktif ditandai begitu, bukan dihilangkan dari daftar."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platform.pillars.map((pillar) => (
            <Card key={pillar.title} as="li" className="ath-reveal flex flex-col p-7">
              <p
                className={
                  pillar.status === "Berjalan"
                    ? "self-start rounded-full border border-border px-3 py-1 text-[0.7rem] uppercase tracking-wider text-accent"
                    : "self-start rounded-full border border-border px-3 py-1 text-[0.7rem] uppercase tracking-wider text-muted"
                }
              >
                {pillar.status}
              </p>
              <h2 className="mt-4 text-lg font-semibold tracking-tight">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
            </Card>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">{platform.closing}</p>
      </Section>

      <FinalCta />
    </>
  );
}
