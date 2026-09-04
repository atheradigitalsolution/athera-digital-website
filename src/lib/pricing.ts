/**
 * Katalog harga publik untuk halaman `/harga`.
 *
 * Harga TIDAK pernah ditulis di repositori ini. Sumber kebenarannya adalah
 * registry platform, yang hanya bisa disunting lewat konsol admin dan setiap
 * perubahannya tercatat. Situs ini membacanya saat request lewat satu API JSON
 * hanya-baca; ia tidak punya koneksi database, tidak memegang kredensial, dan
 * tidak bisa menulis apa pun ke sana.
 *
 * `price_month` bernilai `null` artinya paketnya dijual custom — kartunya
 * berbunyi "Hubungi kami", bukan angka. Itu keadaan yang sah, bukan data hilang.
 *
 * ## Konfigurasi
 *
 * Alamat API TIDAK ditulis di kode karena repositori ini publik. Ia datang dari
 * environment, dan `PRICING_API_URL` wajib ada — tanpa itu halaman tetap tampil
 * tetapi seluruh kartu jatuh ke "Hubungi kami", bukan menampilkan angka yang
 * tidak berasal dari registry.
 *
 *   PRICING_API_URL   URL penuh endpoint katalog harga. WAJIB, tanpa nilai bawaan.
 *
 * Di server nilainya dipasok lewat drop-in systemd, sama seperti
 * `ONBOARDING_INTAKE_HOST` di `onboarding.ts`, sehingga tidak ikut ter-deploy
 * dari repositori.
 *
 * ## Aturan yang tidak boleh dilanggar
 *
 * Bila API tak terjangkau, menjawab bukan 200, atau bentuk datanya tidak sesuai,
 * fungsi di sini mengembalikan daftar kosong — bukan melempar dan bukan menebak.
 * Halaman lalu menampilkan "Hubungi kami" pada setiap kartu. Angka yang tidak
 * berasal dari registry tidak boleh muncul di layar dalam keadaan apa pun.
 */

const PRICING_API_URL = process.env.PRICING_API_URL ?? "";

const TIMEOUT_MS = 10_000;

/** Label tunggal untuk "harga tidak dipublikasikan". Dipakai juga oleh halaman. */
export const CONTACT_LABEL = "Hubungi kami";

export type PublishedPlan = {
  code: string;
  display_name: string;
  products: string[];
  price_month: string | null;
  currency: string;
};

/**
 * Menyaring baris yang bentuknya tidak sesuai, supaya `undefined` atau angka
 * tak terhingga tidak pernah sampai ke penyaji. Baris yang cacat dibuang
 * seluruhnya, bukan ditambal dengan nilai karangan.
 */
function isPublishedPlan(value: unknown): value is PublishedPlan {
  if (typeof value !== "object" || value === null) return false;
  const plan = value as Record<string, unknown>;
  if (typeof plan.code !== "string" || plan.code === "") return false;
  if (typeof plan.display_name !== "string" || plan.display_name === "") return false;
  if (typeof plan.currency !== "string" || plan.currency === "") return false;
  if (!Array.isArray(plan.products)) return false;
  if (plan.price_month !== null && typeof plan.price_month !== "string") return false;
  return true;
}

export async function getPublishedPlans(): Promise<PublishedPlan[]> {
  if (!PRICING_API_URL) {
    // Sengaja berisik: halaman harga yang diam-diam kosong jauh lebih
    // merugikan daripada halaman yang jelas-jelas melapor gagal ke journal.
    console.error(
      "[pricing] PRICING_API_URL belum diisi; katalog harga tidak dibaca dari mana pun dan seluruh kartu jatuh ke \"Hubungi kami\".",
    );
    return [];
  }

  let response: Response;
  try {
    response = await fetch(PRICING_API_URL, {
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { Accept: "application/json" },
    });
  } catch (error) {
    console.error("[pricing] katalog harga tidak terjangkau:", error);
    return [];
  }

  if (!response.ok) {
    console.error(
      `[pricing] katalog harga menjawab ${response.status}; kartu jatuh ke "Hubungi kami".`,
    );
    return [];
  }

  let body: unknown;
  try {
    body = await response.json();
  } catch (error) {
    console.error("[pricing] jawaban katalog harga bukan JSON yang sah:", error);
    return [];
  }

  const plans = (body as { plans?: unknown } | null)?.plans;
  if (!Array.isArray(plans)) {
    console.error("[pricing] jawaban katalog harga tidak memuat daftar `plans`.");
    return [];
  }

  return plans.filter(isPublishedPlan);
}

export function planByCode(
  plans: PublishedPlan[],
  code: string,
): PublishedPlan | undefined {
  return plans.find((plan) => plan.code === code);
}

/**
 * `null` → "Hubungi kami", nol → "Gratis", selebihnya rupiah tanpa sen.
 *
 * Hasil `Intl` memakai spasi tak-putus (U+00A0) antara "Rp" dan angkanya. Kami
 * menormalkannya menjadi spasi biasa supaya teks di halaman bisa dicari dan
 * disalin pengunjung seperti teks biasa.
 */
export function formatPrice(price: string | null, currency: string): string {
  if (price === null) return CONTACT_LABEL;

  const amount = Number(price);
  // Nilai yang tidak bisa dibaca sebagai angka tidak pernah ditampilkan sebagai
  // angka — ia jatuh ke "Hubungi kami", bukan menjadi NaN di layar.
  if (!Number.isFinite(amount)) return CONTACT_LABEL;
  if (amount === 0) return "Gratis";

  try {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace(/\u00A0/g, " ");
  } catch {
    // Kode mata uang yang tidak dikenal membuat Intl melempar. Lebih baik
    // meminta pengunjung menghubungi kami daripada menampilkan angka telanjang.
    return CONTACT_LABEL;
  }
}

/** Benar hanya bila kartunya memang menampilkan nominal berulang tiap bulan. */
export function isRecurringAmount(plan: PublishedPlan | undefined): boolean {
  if (!plan || plan.price_month === null) return false;
  const amount = Number(plan.price_month);
  return Number.isFinite(amount) && amount > 0;
}
