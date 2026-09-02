import { daftar, type FormFeedback } from "@/app/kontak/actions";
import { company, registration } from "@/lib/site";

const fieldClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60 focus:ring-2 focus:ring-accent/20";

const feedbackMessage: Record<FormFeedback, string> = {
  lengkapi: "Nama perusahaan, nama Anda, email, dan persetujuan pemrosesan data wajib diisi.",
  email: "Format email belum benar. Periksa lagi bagian setelah tanda @.",
  batas:
    "Sudah ada beberapa kiriman dari jaringan Anda dalam satu jam terakhir. Coba lagi nanti, atau kirim email langsung ke alamat di bawah.",
  gagal:
    "Kiriman gagal terkirim karena kendala di sisi kami, dan isian Anda tidak tersimpan. Silakan coba lagi, atau kirim email ke alamat di bawah supaya tidak tertahan di sini.",
};

export function isFeedback(value: unknown): value is FormFeedback {
  return (
    value === "lengkapi" || value === "email" || value === "batas" || value === "gagal"
  );
}

function Field({
  label,
  htmlFor,
  hint,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium">
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-accent">
            *
          </span>
        ) : (
          <span className="ml-2 text-xs font-normal text-muted">opsional</span>
        )}
      </label>
      <div className="mt-2">{children}</div>
      {hint ? <p className="mt-1.5 text-xs text-muted">{hint}</p> : null}
    </div>
  );
}

/**
 * Formulir pendaftaran — Server Component, tanpa satu baris JavaScript klien.
 *
 * Kiriman ditangani Server Action yang membalas dengan redirect, sehingga
 * formulir tetap berfungsi penuh kalau skrip gagal dimuat. Kolom wajib ditandai
 * `required` agar peramban menahan kesalahan sebelum permintaan dikirim;
 * pemeriksaan yang sama diulang di server untuk kiriman yang bukan dari peramban.
 */
export function RegistrationForm({ feedback }: { feedback?: FormFeedback }) {
  return (
    <form
      id="daftar-form"
      action={daftar}
      className="rounded-2xl border border-border bg-surface-raised p-6 sm:p-8"
    >
      {feedback ? (
        <p
          role="alert"
          className="mb-6 rounded-xl border border-[var(--warn)]/40 px-4 py-3 text-sm text-[var(--warn)]"
        >
          {feedbackMessage[feedback]}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nama perusahaan" htmlFor="company_name" required>
          <input
            id="company_name"
            name="company_name"
            type="text"
            required
            maxLength={200}
            autoComplete="organization"
            className={fieldClass}
            placeholder="PT Contoh Sejahtera"
          />
        </Field>

        <Field label="Nama Anda" htmlFor="partner_name" required>
          <input
            id="partner_name"
            name="partner_name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            className={fieldClass}
            placeholder="Nama lengkap"
          />
        </Field>

        <Field label="Email kerja" htmlFor="contact_email" required>
          <input
            id="contact_email"
            name="contact_email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={fieldClass}
            placeholder="nama@perusahaan.co.id"
          />
        </Field>

        <Field label="Nomor yang bisa dihubungi" htmlFor="contact_phone">
          <input
            id="contact_phone"
            name="contact_phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            className={fieldClass}
            placeholder="08xx / WhatsApp"
          />
        </Field>

        <Field label="Bidang usaha" htmlFor="vertical_target">
          <select id="vertical_target" name="vertical_target" defaultValue="" className={fieldClass}>
            <option value="">Pilih salah satu</option>
            {registration.verticals.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Jumlah pengguna sistem" htmlFor="company_size">
          <select id="company_size" name="company_size" defaultValue="" className={fieldClass}>
            <option value="">Pilih salah satu</option>
            {registration.sizes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Yang ingin dibicarakan lebih dulu" htmlFor="interest">
            <select id="interest" name="interest" defaultValue="" className={fieldClass}>
              <option value="">Pilih salah satu</option>
              {registration.interests.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field
            label="Sistem yang dipakai sekarang"
            htmlFor="current_system"
            hint="Termasuk kalau jawabannya spreadsheet — itu jawaban yang paling sering kami terima."
          >
            <input
              id="current_system"
              name="current_system"
              type="text"
              maxLength={200}
              className={fieldClass}
              placeholder="Accurate, Odoo, spreadsheet, aplikasi sendiri…"
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field
            label="Apa yang paling menghambat sekarang?"
            htmlFor="message"
            hint="Beberapa kalimat sudah cukup. Tidak perlu menyiapkan dokumen apa pun."
          >
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={4000}
              className={`${fieldClass} resize-y`}
              placeholder="Ceritakan kondisi sekarang dan bagian mana yang paling sering membuat tim kembali ke spreadsheet."
            />
          </Field>
        </div>
      </div>

      {/* Umpan bot. Disembunyikan dari mata dan dari pembaca layar sekaligus. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Jangan diisi</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-7 border-t border-border pt-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-0.5 size-4 shrink-0 rounded border-border accent-[var(--accent)]"
          />
          <span>{registration.consent}</span>
        </label>
        <p className="mt-3 pl-7 text-xs leading-relaxed text-muted">
          {registration.consentNote}
        </p>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="ath-sheen overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
        >
          Kirim pendaftaran
        </button>
        <p className="text-xs leading-relaxed text-muted">
          Lebih suka email biasa?{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-accent transition-colors hover:text-accent-2"
          >
            {company.email}
          </a>
        </p>
      </div>
    </form>
  );
}
