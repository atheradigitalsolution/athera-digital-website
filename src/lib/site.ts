/**
 * Seluruh teks situs ada di berkas ini dan di `products.ts`.
 *
 * Untuk mengubah isi website, sunting kedua berkas itu saja — komponen
 * tampilan hanya membacanya. Bagian bertanda TODO masih menunggu data asli.
 */

export const company = {
  name: "Athera Digital Solution",
  shortName: "ATHERA",
  domain: "athera-digital.com",
  tagline: "Sistem bisnis yang benar-benar dipakai tim Anda",
  email: "info@athera-digital.com",
  // TODO: ganti dengan nomor dan alamat asli, atau hapus barisnya kalau belum mau ditampilkan.
  phone: null as string | null,
  address: null as string | null,
};

export const hero = {
  eyebrow: "ERP · Analitik · Otomasi",
  title: "Satu platform, tiga produk, di atas data Anda sendiri",
  description:
    "Kami membangun dan merawat tulang punggung operasional perusahaan: ERP yang mencerminkan proses Anda, dasbor yang angkanya bisa dipertanggungjawabkan, dan asisten yang menjawab dari data Anda — tanpa memindahkannya ke tempat lain.",
  primaryCta: { label: "Lihat produk", href: "/produk" },
  secondaryCta: { label: "Diskusikan kebutuhan", href: "/kontak" },
  /** Ditampilkan sebagai baris status kecil di bawah tombol. */
  status: "Berjalan di produksi sejak 2026 · dipantau 24/7 · backup harian teruji pulih",
};

export const nav = [
  { label: "Produk", href: "/produk" },
  { label: "Kepatuhan", href: "/kepatuhan" },
  { label: "Layanan", href: "/layanan" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

/**
 * Angka pembuka. Semuanya terukur pada stack referensi kami — bukan target,
 * bukan rata-rata industri. Catatan itu ditampilkan di situs, bukan hanya di
 * komentar ini.
 */
export const proof = {
  note: "Diukur pada stack referensi ATHERA, bukan estimasi.",
  items: [
    { value: 0.16, suffix: " dtk", decimals: 2, label: "ERP → gudang data" },
    { value: 698, suffix: "", decimals: 0, label: "Kolom terklasifikasi" },
    { value: 292, suffix: "", decimals: 0, label: "Uji data hijau" },
    { value: 0, suffix: "", decimals: 0, label: "Kebocoran antar klien" },
  ],
};

export const stack = [
  "Odoo 19",
  "PostgreSQL 16",
  "Logical replication",
  "dbt",
  "Next.js",
  "TypeScript",
  "Docker",
  "Caddy",
  "Prometheus",
  "Grafana",
  "Loki",
  "Alertmanager",
];

export type Service = {
  id: string;
  name: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "implementasi",
    name: "Implementasi & migrasi",
    summary:
      "Memetakan proses yang sebenarnya berjalan, memindahkan data lama dengan angka pembanding, lalu merilis bertahap sampai dipakai sungguhan.",
    points: [
      "Pemetaan proses sebelum satu baris konfigurasi ditulis",
      "Migrasi data yang direkonsiliasi, bukan diperkirakan",
      "Rilis bertahap yang tiap tahapnya sudah bisa dipakai",
      "Pelatihan tim dan pendampingan setelah go-live",
    ],
  },
  {
    id: "aplikasi",
    name: "Aplikasi web custom",
    summary:
      "Untuk kebutuhan yang tidak muat di produk jadi: portal internal, sistem persetujuan, dan aplikasi lini bisnis yang terhubung ke sistem yang sudah ada.",
    points: [
      "Terintegrasi dengan ERP dan sistem yang sudah berjalan",
      "Dibangun dengan teknologi yang mudah dirawat jangka panjang",
      "Kode dan dokumentasi diserahkan kepada Anda",
      "Dirancang untuk dipakai di lapangan, termasuk di ponsel",
    ],
  },
  {
    id: "infrastruktur",
    name: "Infrastruktur & operasional",
    summary:
      "Server, deployment, pemantauan, backup, dan email domain. Bagian yang tidak terlihat pelanggan, tapi paling terasa saat bermasalah.",
    points: [
      "Penyiapan dan pengerasan server produksi",
      "Backup terjadwal beserta gladi pemulihannya",
      "Pemantauan dengan peringatan yang benar-benar berbunyi",
      "Mail server domain sendiri dengan SPF, DKIM, dan DMARC",
    ],
  },
  {
    id: "audit",
    name: "Audit & penyelamatan proyek",
    summary:
      "Untuk sistem yang sudah ada tetapi berhenti di tengah jalan, atau datanya sudah tidak dipercaya tim sendiri.",
    points: [
      "Menilai apa yang dipakai, apa yang dimatikan diam-diam",
      "Menemukan sumber angka yang saling bertentangan",
      "Rencana perbaikan berurutan beserta biayanya",
      "Bisa berhenti di rekomendasi — tidak wajib lanjut ke implementasi",
    ],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Pemetaan",
    description:
      "Kami duduk bersama tim Anda untuk memahami proses yang sebenarnya berjalan — termasuk yang tidak tertulis di SOP mana pun.",
  },
  {
    number: "02",
    title: "Perancangan",
    description:
      "Menyusun rancangan sistem beserta prioritasnya. Anda tahu persis apa yang dibangun lebih dulu dan alasannya.",
  },
  {
    number: "03",
    title: "Implementasi bertahap",
    description:
      "Dirilis per bagian yang langsung bisa dipakai, bukan proyek besar yang baru terlihat hasilnya setelah berbulan-bulan.",
  },
  {
    number: "04",
    title: "Pendampingan",
    description:
      "Pelatihan, perawatan, dan penyesuaian setelah sistem berjalan. Sistem yang tidak dirawat akan ditinggalkan penggunanya.",
  },
];

export const about = {
  title: "Kami membangun untuk dipakai, bukan untuk dipresentasikan",
  paragraphs: [
    "Athera Digital Solution membantu perusahaan menengah membereskan tulang punggung operasionalnya: ERP yang benar-benar mencerminkan proses bisnis, dasbor yang datanya bisa dipertanggungjawabkan, dan otomatisasi yang tidak menambah pekerjaan baru.",
    "Kami mengerjakan keseluruhannya — dari pemetaan proses, pengembangan, sampai server dan email yang menopangnya. Sehingga tidak ada bagian yang saling menunggu, dan tidak ada yang menyalahkan pihak lain saat ada masalah.",
    "Cara kerja kami punya satu kebiasaan yang jarang: setiap klaim teknis di situs ini punya pengukuran atau berkas di belakangnya, dan hal yang belum terbukti kami tulis sebagai belum terbukti. Itu standar yang sama yang kami pakai saat melaporkan status proyek Anda.",
  ],
  highlights: [
    {
      title: "Satu pihak, satu tanggung jawab",
      description:
        "Aplikasi, data, dan infrastruktur ditangani tim yang sama, sehingga tidak ada celah antar vendor saat terjadi masalah.",
    },
    {
      title: "Bertahap dan terukur",
      description:
        "Setiap tahap menghasilkan sesuatu yang bisa dipakai, sehingga investasi Anda terlihat hasilnya sejak awal.",
    },
    {
      title: "Dirawat, bukan ditinggalkan",
      description:
        "Setelah go-live, sistem tetap dipantau, di-backup, dan disesuaikan mengikuti perubahan bisnis.",
    },
    {
      title: "Terbukti, bukan diklaim",
      description:
        "Backup yang belum pernah diuji pulih bukan backup, dan alarm yang belum pernah berbunyi bukan pemantauan. Keduanya kami uji sampai gagal dulu.",
    },
  ],
};

/**
 * Halaman kepatuhan. Bagian `gaps` disengaja: menyebut yang belum otomatis
 * lebih dulu adalah bagian dari posisi kepatuhan itu sendiri.
 */
export const compliance = {
  eyebrow: "UU 27/2022",
  title: "Pelindungan data pribadi yang berlaku di lapisan data, bukan di halaman kebijakan",
  description:
    "Kewajiban pengendali data menurut UU Pelindungan Data Pribadi kami terjemahkan menjadi mekanisme yang tidak bisa lupa dijalankan: klasifikasi wajib, penyamaran saat pemuatan, dan hak akses yang ditegakkan mesin database.",
  classes: [
    { name: "Publik", meaning: "Sudah bersifat publik", action: "Disimpan apa adanya" },
    { name: "Internal", meaning: "Data bisnis, bukan tentang orang", action: "Disimpan apa adanya" },
    { name: "Pribadi", meaning: "Data pribadi umum yang mengidentifikasi orang", action: "Disamarkan satu arah" },
    { name: "Spesifik", meaning: "Kesehatan, biometrik, keuangan, keyakinan", action: "Disamarkan; teks bebas dikosongkan" },
    { name: "Rahasia", meaning: "Kredensial dan token", action: "Tidak pernah diambil sama sekali" },
  ],
  guarantees: [
    {
      title: "Kolom tanpa klasifikasi tidak bisa mendarat",
      body: "Daftar kolom yang direplikasi diturunkan dari registri klasifikasi, dan peran pemuat tidak punya hak membuat tabel baru. Kolom yang belum diklasifikasi tidak akan tersalin diam-diam tanpa penyamaran — ia tidak tersalin sama sekali, dan itu memicu pemeriksaan.",
    },
    {
      title: "Penyamaran terjadi saat memuat, bukan sesudahnya",
      body: "Nilai disamarkan sebelum perintah simpan dijalankan. Tidak ada jeda waktu ketika gudang memegang data pribadi dalam bentuk terbaca, dan tidak ada proses pembersihan yang bisa gagal berjalan.",
    },
    {
      title: "Kredensial tidak ikut tersalin",
      body: "Kolom berkelas rahasia tidak pernah masuk daftar yang diambil, sehingga tidak hadir sebagai kolom di gudang — bukan hadir dalam keadaan kosong.",
    },
    {
      title: "Akses tercatat",
      body: "Pembacaan data di gudang dicatat, dan pemisahan antar klien ditegakkan oleh mesin database dengan peran yang tidak berhak melewatinya.",
    },
  ],
  gaps: [
    {
      title: "Penghapusan atas permintaan subjek data belum otomatis",
      body: "Permintaan penghapusan diproses lewat prosedur tertulis yang dijalankan operator, termasuk perambatannya ke gudang data. Kami menyebutnya di sini karena kewajiban yang diselesaikan orang lewat prosedur bukan hal yang sama dengan kewajiban yang diselesaikan kode — dan pembeda antara keduanya baru terasa saat permintaannya datang.",
    },
  ],
  numbers: [
    { value: "698", label: "Kolom terdaftar klasifikasinya" },
    { value: "5", label: "Kelas data" },
    { value: "27", label: "Kolom data pribadi disamarkan" },
    { value: "5", label: "Kolom rahasia tidak diambil" },
  ],
};

export const contact = {
  title: "Mari bicara soal kebutuhan Anda",
  description:
    "Ceritakan kondisi sistem Anda sekarang dan apa yang paling menghambat. Kami akan menanggapi dengan gambaran pendekatan yang masuk akal — bukan langsung penawaran harga.",
  points: [
    "Balasan pertama berisi pertanyaan, bukan proposal 40 halaman.",
    "Kalau kebutuhan Anda lebih murah diselesaikan tanpa kami, kami akan mengatakannya.",
    "Audit bisa berhenti di rekomendasi tanpa kewajiban lanjut.",
  ],
};

/**
 * Formulir pendaftaran di halaman kontak.
 *
 * Kiriman mendarat di modul onboarding Odoo sebagai `onboarding.public.submission`,
 * lalu dipromosikan menjadi journey oleh operator dari konsol admin.
 */
export const registration = {
  eyebrow: "Pendaftaran",
  title: "Daftarkan perusahaan Anda",
  description:
    "Isian ini masuk langsung ke antrean onboarding kami, bukan ke kotak masuk umum. Yang wajib hanya empat kolom pertama; sisanya membantu kami menyiapkan pembicaraan pertama yang lebih berguna.",
  verticals: [
    "Ritel / F&B",
    "Distribusi & grosir",
    "Manufaktur",
    "Jasa & profesional",
    "PPOB / keagenan",
    "Lainnya",
  ],
  interests: [
    "Belum tahu, butuh diskusi dulu",
    "ATHERA ERP (Odoo)",
    "ATHERA Insight (dasbor & analitik)",
    "ATHERA Agent (pratinjau terbatas)",
    "Audit sistem yang sudah ada",
  ],
  sizes: ["1-10 orang", "11-50 orang", "51-200 orang", "Lebih dari 200 orang"],
  consent:
    "Saya setuju data pada formulir ini diproses untuk menanggapi permintaan saya.",
  consentNote:
    "Kami memakainya hanya untuk menanggapi permintaan ini dan tidak membagikannya ke pihak ketiga. Permintaan penghapusan bisa dikirim kapan saja ke alamat email di bawah.",
  successTitle: "Terima kasih, pendaftaran Anda sudah masuk.",
  successBody:
    "Kami membacanya sendiri, bukan lewat autoresponder. Balasan pertama biasanya berisi pertanyaan agar kami tidak menawarkan sesuatu yang belum tentu Anda butuhkan.",
};

export const finalCta = {
  title: "Sistem yang rapi dimulai dari satu percakapan",
  description:
    "Tidak perlu menyiapkan dokumen apa pun. Cukup ceritakan apa yang paling sering membuat tim Anda kembali ke spreadsheet.",
};
