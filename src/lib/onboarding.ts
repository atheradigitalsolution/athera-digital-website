import { request as httpRequest } from "node:http";

/**
 * Pengiriman formulir pendaftaran ke endpoint intake Odoo.
 *
 * Endpoint-nya milik modul `custom_onboarding_journey` pada database tenant
 * yang dikonfigurasi (`POST /onboarding/public/intake`, `type="json"`, auth
 * publik, tanpa CSRF). Ia menyimpan payload apa adanya sebagai
 * `onboarding.public.submission`, lalu operator mempromosikannya menjadi
 * journey dari konsol admin.
 *
 * Dipanggil dari server, bukan dari browser: alamat Odoo tidak pernah muncul di
 * halaman, dan IP asli pengunjung bisa diteruskan lewat X-Forwarded-For — Odoo
 * berjalan dengan `proxy_mode = True` dan memakai IP itu untuk batas kiriman
 * per jam per IP.
 *
 * Memakai `node:http`, BUKAN `fetch`. Odoo memilih database dari label pertama
 * header Host (`dbfilter = ^%d$`), sedangkan fetch bawaan Node (undici) menimpa
 * Host dengan alamat tujuan, sehingga permintaan berakhir sebagai "No database
 * is selected". Header `X-Odoo-Database` juga tidak menolong: dbfilter tetap
 * menyaringnya. Jangan menggantinya kembali ke fetch.
 *
 * ## Konfigurasi
 *
 * Alamat tujuan TIDAK ditulis di kode karena repositori ini publik. Semuanya
 * datang dari environment, dan `ONBOARDING_INTAKE_HOST` wajib ada — tanpa itu
 * pengiriman ditolak di tempat, bukan diam-diam mengarah ke tujuan yang salah.
 *
 *   ONBOARDING_INTAKE_HOST       `<database>.<domain>` untuk header Host. WAJIB.
 *   ONBOARDING_INTAKE_HOSTNAME   alamat yang dihubungi (default 127.0.0.1)
 *   ONBOARDING_INTAKE_PORT       porta Odoo (default 8069)
 *   ONBOARDING_INTAKE_PATH       rute intake (default /onboarding/public/intake)
 *
 * Di server ini nilainya dipasok lewat drop-in systemd
 * `/etc/systemd/system/athera-web.service.d/onboarding.conf`, sehingga tidak
 * ikut ter-deploy dari repositori.
 */

const INTAKE_HOSTNAME = process.env.ONBOARDING_INTAKE_HOSTNAME ?? "127.0.0.1";
const INTAKE_PORT = Number(process.env.ONBOARDING_INTAKE_PORT ?? "8069");
const INTAKE_PATH =
  process.env.ONBOARDING_INTAKE_PATH ?? "/onboarding/public/intake";
/** `<database>.<domain>` — bukan sekadar domain, dan tanpa nilai bawaan. */
const INTAKE_HOST_HEADER = process.env.ONBOARDING_INTAKE_HOST ?? "";

const TIMEOUT_MS = 10_000;

export type IntakeResult =
  | { ok: true; token: string | null }
  | { ok: false; reason: "rate_limited" | "rejected" | "unreachable" };

function post(body: string, clientIp: string | null) {
  return new Promise<{ status: number; text: string }>((resolve, reject) => {
    const headers: Record<string, string> = {
      Host: INTAKE_HOST_HEADER,
      "Content-Type": "application/json",
      "Content-Length": String(Buffer.byteLength(body)),
      "X-Forwarded-Proto": "https",
      // WAJIB ikut dikirim. Odoo hanya memasang ProxyFix ketika X-Forwarded-Host
      // ada; tanpa header ini X-Forwarded-For diabaikan, seluruh pengunjung
      // terbaca sebagai satu alamat yang sama, dan batas "per IP" di sisi Odoo
      // berubah menjadi batas global yang menutup formulir untuk semua orang.
      "X-Forwarded-Host": INTAKE_HOST_HEADER,
    };
    if (clientIp) headers["X-Forwarded-For"] = clientIp;

    const req = httpRequest(
      {
        hostname: INTAKE_HOSTNAME,
        port: INTAKE_PORT,
        path: INTAKE_PATH,
        method: "POST",
        headers,
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (chunk: Buffer) => chunks.push(chunk));
        res.on("end", () =>
          resolve({
            status: res.statusCode ?? 0,
            text: Buffer.concat(chunks).toString("utf8"),
          }),
        );
      },
    );

    req.setTimeout(TIMEOUT_MS, () => req.destroy(new Error("timeout")));
    req.on("error", reject);
    req.end(body);
  });
}

export async function submitOnboarding(
  payload: Record<string, unknown>,
  clientIp: string | null,
): Promise<IntakeResult> {
  if (!INTAKE_HOST_HEADER) {
    // Sengaja berisik: formulir yang diam-diam membuang kiriman jauh lebih
    // merugikan daripada formulir yang jelas-jelas melapor gagal.
    console.error(
      "[onboarding] ONBOARDING_INTAKE_HOST belum diisi; pendaftaran tidak dikirim ke mana pun.",
    );
    return { ok: false, reason: "unreachable" };
  }

  // Odoo mengurai `params` menjadi kwargs controller.
  const body = JSON.stringify({ jsonrpc: "2.0", method: "call", params: payload });

  let response: { status: number; text: string };
  try {
    response = await post(body, clientIp);
  } catch {
    return { ok: false, reason: "unreachable" };
  }

  if (response.status !== 200) return { ok: false, reason: "unreachable" };

  let parsed: { result?: { token?: string; error?: string }; error?: unknown };
  try {
    parsed = JSON.parse(response.text);
  } catch {
    return { ok: false, reason: "unreachable" };
  }

  // Odoo membungkus pengecualian di `error`; controller sendiri melaporkan
  // penolakan lunak di dalam `result.error`.
  if (parsed.error) return { ok: false, reason: "unreachable" };

  const result = parsed.result;
  if (result?.error === "rate_limited") return { ok: false, reason: "rate_limited" };
  if (result?.error) return { ok: false, reason: "rejected" };

  return { ok: true, token: result?.token ?? null };
}
