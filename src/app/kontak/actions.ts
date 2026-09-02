"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { submitOnboarding } from "@/lib/onboarding";
import { rateLimit } from "@/lib/rate-limit";

/**
 * Kode hasil yang dikembalikan lewat query string. Sengaja memakai redirect,
 * bukan state di komponen: dengan begitu formulirnya tetap Server Component
 * dan tetap terkirim meski JavaScript tidak jalan sama sekali.
 */
export type FormFeedback = "lengkapi" | "email" | "batas" | "gagal";

const MAX = {
  company_name: 200,
  partner_name: 120,
  contact_email: 200,
  contact_phone: 40,
  current_system: 200,
  message: 4000,
};

function clean(value: FormDataEntryValue | null, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

/**
 * Alamat asli pengunjung, dipakai Odoo untuk batas 5 kiriman per jam per IP.
 * Caddy menaruhnya di X-Forwarded-For; entri paling kiri adalah kliennya.
 */
async function clientIp() {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || null;
  return h.get("x-real-ip");
}

export async function daftar(formData: FormData) {
  // Umpan bot: kolom ini tersembunyi dari manusia, jadi terisinya berarti bukan
  // manusia. Dijawab seolah berhasil agar tidak memberi petunjuk apa pun.
  if (clean(formData.get("website"), 100)) redirect("/kontak/terkirim");

  const values = {
    company_name: clean(formData.get("company_name"), MAX.company_name),
    partner_name: clean(formData.get("partner_name"), MAX.partner_name),
    contact_email: clean(formData.get("contact_email"), MAX.contact_email),
    contact_phone: clean(formData.get("contact_phone"), MAX.contact_phone),
    vertical_target: clean(formData.get("vertical_target"), 100),
    company_size: clean(formData.get("company_size"), 60),
    interest: clean(formData.get("interest"), 120),
    current_system: clean(formData.get("current_system"), MAX.current_system),
    message: clean(formData.get("message"), MAX.message),
  };
  const consent = formData.get("consent") === "on";

  // Peramban sudah menahan kolom kosong lewat atribut `required`; pemeriksaan
  // ini untuk kiriman yang tidak lewat peramban sama sekali.
  if (!values.company_name || !values.partner_name || !values.contact_email || !consent) {
    redirect("/kontak?f=lengkapi#daftar");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.contact_email)) {
    redirect("/kontak?f=email#daftar");
  }

  const ip = await clientIp();
  if (!rateLimit(ip)) redirect("/kontak?f=batas#daftar");

  const result = await submitOnboarding(
    {
      ...values,
      // Odoo memakai `partner_email` saat mempromosikan kiriman menjadi journey,
      // dan `contact_email` saat menyusun profil perusahaan. Kirim keduanya.
      partner_email: values.contact_email,
      consent_given: true,
      consent_text:
        "Persetujuan pemrosesan data untuk menanggapi permintaan, diberikan lewat formulir publik.",
      source: "athera-digital.com/kontak",
      locale: "id-ID",
    },
    ip,
  );

  if (result.ok) redirect("/kontak/terkirim");
  if (result.reason === "rate_limited") redirect("/kontak?f=batas#daftar");
  redirect("/kontak?f=gagal#daftar");
}
