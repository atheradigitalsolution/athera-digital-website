import { createHash, randomBytes } from "node:crypto";

/**
 * Pembatas laju per alamat IP untuk formulir publik.
 *
 * Odoo sudah punya pembatas sendiri, tetapi buketnya hidup di dalam proses
 * worker — dengan beberapa worker, batasnya terkali sebanyak jumlah worker dan
 * praktis tidak menahan apa pun. Modulnya sendiri menyebut itu ("good enough
 * for a single-worker dev install"). Situs ini berjalan sebagai satu proses,
 * jadi buket di sini benar-benar mengikat.
 *
 * IP tidak pernah disimpan apa adanya: yang disimpan sidik HMAC-nya dengan
 * garam acak per proses, sehingga isi memori tidak berisi data yang bisa
 * mengidentifikasi orang, dan jejaknya hilang saat proses berakhir.
 */

const SALT = randomBytes(32);
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
/** Batas jumlah kunci, supaya banjir dari banyak IP tidak menggelembungkan memori. */
const MAX_KEYS = 5000;

const buckets = new Map<string, number[]>();

function fingerprint(ip: string) {
  return createHash("sha256").update(SALT).update(ip).digest("base64url");
}

export function rateLimit(ip: string | null, now = Date.now()): boolean {
  // Tanpa IP yang bisa dikenali, jangan menolak siapa pun: menolak permintaan
  // sah lebih merugikan daripada meloloskan satu yang tidak terhitung.
  if (!ip) return true;

  const key = fingerprint(ip);
  const cutoff = now - WINDOW_MS;

  for (const [k, hits] of buckets) {
    const kept = hits.filter((t) => t >= cutoff);
    if (kept.length === 0) buckets.delete(k);
    else buckets.set(k, kept);
  }

  const hits = buckets.get(key) ?? [];
  if (hits.length >= MAX_PER_WINDOW) return false;
  if (!buckets.has(key) && buckets.size >= MAX_KEYS) return false;

  hits.push(now);
  buckets.set(key, hits);
  return true;
}
