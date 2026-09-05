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
  // `null` ADALAH KEADAAN YANG SUDAH DITANGANI, BUKAN PEKERJAAN YANG TERTINGGAL.
  // Kontak (`/kontak`) dan footer keduanya menjaga nilai ini sebelum merender, jadi
  // tidak ada baris kosong dan tidak ada tulisan "null" yang muncul di layar —
  // diperiksa pada HTML terender, bukan disimpulkan dari kode.
  // Isi HANYA dengan nomor dan alamat yang benar-benar dijawab orang. Nomor
  // karangan di halaman kontak adalah kegagalan yang lebih buruk daripada tidak
  // ada nomor sama sekali: pengunjung menelepon, tidak ada yang mengangkat, dan
  // seluruh sisa situs ikut kehilangan kredibilitasnya.
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
  // Fondasi bersama di bawah ketiga produk. Ia ada di nav dan bukan hanya di
  // footer karena isinya justru pembeda terkuat kami, dan situs ini tidak pernah
  // menyebutnya sama sekali sampai 2026-09-05.
  { label: "Platform", href: "/platform" },
  { label: "Harga", href: "/harga" },
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

/**
 * Teks halaman harga. NOMINALNYA TIDAK ADA DI SINI dan tidak boleh ditulis di
 * sini.
 *
 * Angka harga dibaca saat request dari katalog harga platform lewat
 * `src/lib/pricing.ts`; sumber kebenarannya adalah registry yang hanya bisa
 * disunting dari konsol admin. Kalau harga berubah, ia berubah di sana dan
 * halaman ini ikut berubah tanpa deploy. Menyalin nominalnya ke berkas ini akan
 * membuat situs menampilkan angka yang tidak bisa dipertanggungjawabkan.
 */
export const pricing = {
  eyebrow: "Harga",
  title: "Harga langganan yang bisa Anda hitung sebelum menghubungi kami",
  description:
    "Angka di halaman ini dibaca langsung dari katalog harga kami saat halaman dibuka, bukan disalin ke dalam brosur yang lupa diperbarui. Yang belum berupa angka kami tulis apa adanya sebagai belum berupa angka.",
  /** Ditempel di belakang nominal yang memang berulang tiap bulan. */
  perMonth: "/ bulan",
  /** Label paket untuk produk yang memang dijual custom. */
  customPlanLabel: "Disusun per kebutuhan",
  /**
   * Keputusan yang sudah diambil: biaya implementasi tidak pernah ditampilkan
   * sebagai nominal di halaman publik, karena ia memang bergantung ruang
   * lingkup. Baris ini wajib ada di setiap kartu.
   */
  implementation: "Biaya implementasi: menyesuaikan kebutuhan — Hubungi kami",
  ctaLabel: "Diskusikan kebutuhan",
  suite: {
    eyebrow: "Paket gabungan",
    /** Dipakai hanya bila katalog tidak terbaca; nama resminya datang dari registry. */
    fallbackName: "ATHERA Suite",
    description:
      "Ketiga produk dalam satu langganan. Harganya tidak dipasang di muka karena paket ini memuat ATHERA Agent, yang masih pratinjau terbatas dan disiapkan per klien — jadi angkanya disusun mengikuti ruang lingkup Anda, bukan dibulatkan dari daftar.",
  },
  notesTitle: "Yang perlu Anda tahu sebelum membandingkan angka",
  notes: [
    "Harga di atas adalah langganan bulanan per tenant — satu lingkungan terpisah untuk perusahaan Anda, bukan per pengguna.",
    "Biaya implementasi terpisah dari langganan dan dihitung sekali di awal, mengikuti ruang lingkup migrasi dan penyesuaian yang disepakati.",
    "Angka di halaman ini dibaca dari katalog harga kami saat halaman dibuka. Bila katalog sedang tidak terbaca, kartunya berbunyi \u201cHubungi kami\u201d \u2014 kami memilih itu daripada menampilkan angka lama.",
    "Belum ada yang mengikat sampai ruang lingkupnya disepakati tertulis.",
  ],
};

/**
 * Pintasan bagi klien yang sudah punya akun.
 *
 * KEDUANYA MENUNJUK KE PINTU, BUKAN KE HALAMAN LOGIN, DAN ITU BENAR. Diperiksa
 * 2026-09-05: membuka `odoo.<domain>` dari peramban menjawab 303 ke halaman login
 * HTML gerbang; `insight.<domain>` menjawab 307 ke `/login?next=/`. Keduanya
 * mendarat di formulir masuk yang sebenarnya.
 *
 * Sebuah audit sempat melaporkan bahwa tombol Odoo "memuntahkan JSON 401 mentah
 * ke pengunjung". Itu terlihat dengan `curl` polos, yang tidak mengirim
 * `Accept: text/html`; gerbang menjawab JSON untuk klien API dan mengalihkan
 * peramban ke login. Perilaku itu disengaja dan sudah ada di gerbangnya.
 * JANGAN menggantinya dengan tautan langsung ke halaman login: pintu inilah yang
 * tahu ke mana pengunjung harus kembali setelah masuk, dan alamat login bisa
 * berpindah tanpa memberi tahu berkas ini.
 */
export const appShortcuts = {
  eyebrow: "Buka aplikasi",
  title: "Sudah menjadi klien? Langsung buka produk Anda",
  items: [
    { label: "Buka Insight", href: "https://insight.athera-digital.com", note: "Dasbor & analitik" },
    { label: "Buka Odoo", href: "https://odoo.athera-digital.com", note: "ERP Anda" },
  ],
};

export const finalCta = {
  title: "Sistem yang rapi dimulai dari satu percakapan",
  description:
    "Tidak perlu menyiapkan dokumen apa pun. Cukup ceritakan apa yang paling sering membuat tim Anda kembali ke spreadsheet.",
};

/**
 * Halaman yang isinya adalah ketiadaan isi — dan mengatakannya terus terang.
 *
 * `/blog`, `/studi-kasus`, dan `/karir` menjawab 404 sampai 2026-09-05, dan tidak
 * satu pun ditautkan dari mana-mana: mereka bukan tautan rusak, melainkan alamat
 * yang dicoba orang dan tidak dijawab.
 *
 * KENAPA BUKAN "SEGERA HADIR". Halaman kosong berhiaskan janji sama tidak
 * bergunanya dengan 404, dan ia menambah satu hal: kesan bahwa ada yang sedang
 * disiapkan. Ketiga halaman di bawah menyatakan apa yang tidak ada, menyebut
 * alasannya, lalu menunjuk hal yang memang ada.
 *
 * KENAPA STUDI KASUS TIDAK DIKARANG. Cerita tentang klien yang tidak ada adalah
 * klaim yang tidak boleh kami buat, dan ia satu-satunya jenis konten di situs ini
 * yang tidak bisa diperbaiki belakangan kalau terlanjur salah — pembaca yang tahu
 * bahwa satu klien fiktif tidak akan percaya angka mana pun di halaman lain.
 *
 * Ketiganya `noindex` dan tidak masuk sitemap: tidak ada yang perlu diperingkat.
 * Ketika isinya sudah ada, hapus `robots` di halamannya dan masukkan rutenya ke
 * `companyRoutes` pada `sitemap.ts`.
 */
export const thinPages = {
  blog: {
    slug: "/blog",
    title: "Catatan teknis",
    lead: "Belum ada tulisan yang kami terbitkan di sini.",
    body: [
      "Kami lebih dulu menulis dokumentasi yang dipakai untuk membangun dan merawat sistem klien, dan itu belum berbentuk tulisan yang enak dibaca umum. Menerbitkan artikel demi mengisi halaman akan menghabiskan waktu yang sekarang dipakai untuk pekerjaan yang dibayar klien.",
      "Kalau Anda mencari penjelasan teknis tentang cara kerja produk kami, halaman produk memuatnya lengkap dengan angka dan batasannya — termasuk yang belum aktif.",
    ],
    links: [
      { label: "Cara kerja tiap produk", href: "/produk" },
      { label: "Fondasi bersama platform", href: "/platform" },
      { label: "Penanganan data pribadi", href: "/kepatuhan" },
    ],
  },
  studiKasus: {
    slug: "/studi-kasus",
    title: "Studi kasus",
    lead: "Kami belum menerbitkan studi kasus klien, dan kami tidak akan mengarangnya.",
    body: [
      "Studi kasus yang jujur menuntut izin klien, angka sebelum dan sesudah yang bisa dipertanggungjawabkan, dan waktu pemakaian yang cukup panjang untuk punya arti. Belum ada yang memenuhi ketiganya, jadi halaman ini kosong dari cerita klien.",
      "Menuliskan cerita tentang klien yang tidak ada akan merusak satu-satunya hal yang membuat angka di situs ini berguna. Setiap angka di halaman produk kami berasal dari stack referensi kami sendiri dan dilabeli begitu — bukan rata-rata industri, bukan estimasi, dan bukan hasil klien yang belum ada.",
      "Kalau Anda ingin menilai kami sebelum ada studi kasus, mintalah demo di atas data contoh Anda sendiri. Itu bukti yang lebih baik daripada cerita siapa pun.",
    ],
    links: [
      { label: "Angka yang bisa kami tunjukkan hari ini", href: "/produk" },
      { label: "Minta demo di atas data Anda", href: "/kontak" },
    ],
  },
  karir: {
    slug: "/karir",
    title: "Karier",
    lead: "Tidak ada lowongan terbuka saat ini.",
    body: [
      "Kami tim kecil, dan menambah orang adalah keputusan yang kami ambil ketika pekerjaannya sudah pasti ada — bukan untuk mengisi daftar lowongan. Ketika ada posisi terbuka, ia akan muncul di halaman ini beserta lingkup kerja dan rentang gajinya.",
      "Lamaran terbuka tetap kami baca. Kirimkan apa yang pernah Anda bangun dan bagian mana yang paling sulit; itu lebih berguna bagi kami daripada daftar teknologi.",
    ],
    links: [{ label: "Kirim lamaran terbuka", href: "mailto:" }],
  },
};

/**
 * Fondasi bersama di bawah ketiga produk.
 *
 * KENAPA HALAMAN INI ADA, DAN KENAPA IA BUKAN PRODUK KEEMPAT. Peta platform kami
 * menyebut enam komponen; situs ini menjual tiga produk. Tiga sisanya adalah situs
 * ini sendiri, gerbang login, dan konsol pengelolaan langganan — tidak satu pun
 * dijual terpisah. Menerbitkannya sebagai kartu di /produk dan /harga berarti
 * mengarang katalog: pengunjung akan mengira ada yang bisa dibeli, dan salah satu
 * di antaranya (portal penagihan sisi klien) memang belum bisa dipakai klien.
 *
 * Yang benar-benar hilang dari situs ini bukan tiga kartu produk, melainkan
 * penjelasan tentang fondasi yang ketiganya duduki — dan justru di situlah
 * pembeda kami. Halaman ini menyebut juga bagian yang BELUM aktif, karena daftar
 * kemampuan yang hanya memuat yang berhasil adalah daftar yang tidak bisa dipakai
 * untuk mengambil keputusan.
 */
export const platform = {
  eyebrow: "Fondasi",
  title: "Satu fondasi di bawah ketiga produk",
  description:
    "Produk kami tidak berdiri sendiri-sendiri. Di bawahnya ada satu lapisan yang menangani siapa Anda, data siapa yang boleh Anda lihat, dan apa yang terjadi ketika sesuatu rusak. Bagian ini jarang muncul di brosur karena tidak terlihat — dan ia yang paling menentukan apakah sistemnya masih bisa dipercaya di tahun kedua.",
  pillars: [
    {
      title: "Satu login untuk semua layanan",
      body: "Masuk sekali, lalu buka dasbor maupun ERP tanpa membuat kata sandi kedua. Kunci penandatangan berputar tanpa memaksa semua orang keluar, dan pencabutan akses berlaku pada permintaan berikutnya — bukan menunggu sesi kedaluwarsa dengan sendirinya.",
      status: "Berjalan",
    },
    {
      title: "Akses ditutup secara bawaan",
      body: "Langganan yang berhenti menutup akses ke aplikasinya, dan itu diperiksa ulang setiap permintaan, bukan sekali saat login. Sebuah sesi yang sudah berjalan tidak menjadi kunci yang berlaku selamanya.",
      status: "Berjalan",
    },
    {
      title: "Pemisahan antar klien di tingkat penyimpanan",
      body: "Data perusahaan Anda dipisahkan oleh mesin database, bukan oleh klausa penyaring yang bisa terlupa saat seseorang menulis kueri baru. Peran yang melayani dasbor tidak punya hak melewatinya.",
      status: "Berjalan",
    },
    {
      title: "Lingkungan terpisah per perusahaan",
      body: "Setiap klien mendapat lingkungan sendiri, dibuat dari satu prosedur yang sama dan tercatat di log yang tidak bisa disunting — termasuk siapa yang membuatnya dan kapan.",
      status: "Berjalan",
    },
    {
      title: "Backup yang pemulihannya diuji",
      body: "Basis data dan filestore, keduanya, dengan manifest dan checksum, lalu dipulihkan ke salinan untuk dibuktikan. Backup yang belum pernah dipulihkan bukan backup, melainkan asumsi.",
      status: "Berjalan",
    },
    {
      title: "Portal penagihan sisi klien",
      body: "Melihat tagihan dan riwayat pembayaran sendiri, tanpa menghubungi kami. Siklus penagihannya sudah berjalan di sisi kami; halaman untuk klien belum dibuka, dan kami menyebutkannya di sini alih-alih menunggu ditanya.",
      status: "Belum dibuka",
    },
  ],
  closing:
    "Bagian yang bertanda “Belum dibuka” memang belum bisa Anda pakai. Kami menuliskannya karena daftar kemampuan yang hanya memuat yang berhasil tidak bisa dipakai siapa pun untuk mengambil keputusan.",
};
