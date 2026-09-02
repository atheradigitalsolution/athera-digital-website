/**
 * Isi halaman produk.
 *
 * Angka dan klaim di berkas ini berasal dari platform ATHERA yang benar-benar
 * berjalan (dokumen `docs/architecture.md` dan `docs/pdp-compliance.md` pada
 * repositori platform) dan diukur pada stack referensi kami — bukan
 * perkiraan pemasaran. Kalau sebuah angka berubah di sana, ubah juga di sini;
 * jangan membulatkannya ke atas.
 */

export type ProductSlug = "insight" | "odoo" | "agent";

export type Product = {
  slug: ProductSlug;
  index: string;
  name: string;
  status: "Produksi" | "Pratinjau terbatas";
  tagline: string;
  summary: string;
  /** Tiga kalimat pendek untuk kartu di beranda. */
  highlights: string[];
  capabilities: { title: string; body: string }[];
  pipeline: { label: string; caption: string }[];
  evidence: { value: string; label: string; note: string }[];
  forWho: string[];
  /** Batas yang kami sebutkan lebih dulu, sebelum ditanya. */
  limits: string[];
  faq: { q: string; a: string }[];
  /** Cuplikan terminal/respons nyata, dipakai sebagai ilustrasi di halaman produk. */
  terminal: {
    title: string;
    lines: { text: string; tone?: "muted" | "accent" | "ok" | "warn" }[];
  };
};

export const products: Product[] = [
  {
    slug: "insight",
    index: "01",
    name: "ATHERA Insight",
    status: "Produksi",
    tagline: "Dasbor yang angkanya bisa Anda pertanggungjawabkan.",
    summary:
      "Insight membaca perubahan langsung dari log transaksi database ERP Anda — setiap penambahan, perubahan, dan penghapusan — lalu mengalirkannya ke gudang data terpisah. Dasbor tidak pernah menembak database operasional, dan setiap angka di layar membawa waktu pembaruan terakhirnya.",
    highlights: [
      "Perubahan mendarat dalam hitungan detik, bukan menunggu proses semalam.",
      "Data pribadi disamarkan sebelum menyentuh gudang, bukan dibersihkan setelahnya.",
      "Setiap angka membawa stempel kesegarannya sendiri.",
    ],
    capabilities: [
      {
        title: "Lima tampilan dan satu drill-down",
        body: "Ringkasan, Penjualan, Persediaan, Keuangan, dan PPOB, ditambah penelusuran sampai ke baris transaksi yang membentuk sebuah angka. Bukan galeri grafik; setiap tampilan menjawab pertanyaan yang benar-benar ditanyakan saat rapat.",
      },
      {
        title: "Kesegaran dibaca, bukan diasumsikan",
        body: "Setiap respons membawa waktu pembaruan terakhir dan penanda basi. Sumbernya adalah catatan pipeline, bukan jam dinding server — sehingga pipeline yang mati terlihat mati, bukan tampak segar dengan angka kemarin.",
      },
      {
        title: "Penghapusan ikut terbawa",
        body: "Data yang dihapus di ERP hilang juga dari dasbor. Terdengar sepele, tapi metode sinkronisasi berbasis kolom tanggal ubah tidak bisa melakukannya — penghapusan tidak meninggalkan jejak apa pun untuk dilihat.",
      },
      {
        title: "Isolasi antar klien di tingkat penyimpanan",
        body: "Pemisahan data diberlakukan oleh mesin database, bukan oleh klausa WHERE yang bisa terlupa saat menulis kueri baru. Peran yang melayani dasbor tidak punya hak melewatinya.",
      },
      {
        title: "Tidak ada SQL yang datang dari browser",
        body: "Dasbor memanggil satu endpoint kueri yang menyusun sendiri SQL-nya dari daftar metrik yang disetujui. Identitas klien diambil dari token yang terverifikasi, tidak pernah dari parameter yang bisa diubah pengguna.",
      },
      {
        title: "Gudang tidak bisa menulis balik ke ERP",
        body: "Koneksi analitik hanya memegang hak baca. Bukan karena ada aturan yang melarang, tetapi karena peran databasenya memang tidak memiliki hak tulis.",
      },
    ],
    pipeline: [
      { label: "Odoo", caption: "Transaksi harian tim Anda" },
      { label: "WAL", caption: "Log perubahan Postgres" },
      { label: "Loader", caption: "Menyamarkan saat memuat" },
      { label: "Gudang", caption: "Landing zone hanya-tambah" },
      { label: "Mart", caption: "Model siap pakai (dbt)" },
      { label: "Dasbor", caption: "Angka beserta kesegarannya" },
    ],
    evidence: [
      {
        value: "0,16 dtk",
        label: "ERP → gudang",
        note: "Waktu tempuh satu record: tambah 0,16 dtk, ubah 0,15 dtk, hapus 0,20 dtk — terhadap anggaran 60 detik.",
      },
      {
        value: "15/15",
        label: "Tabel terekonsiliasi",
        note: "Total gudang cocok persis dengan total Odoo; debit sama dengan kredit pada seluruh baris jurnal yang diuji.",
      },
      {
        value: "292",
        label: "Uji data lulus",
        note: "Uji transformasi dbt pada setiap build, nol error. Build yang gagal tidak diam-diam menerbitkan angka.",
      },
      {
        value: "0",
        label: "Baris klien lain yang terlihat",
        note: "13.755 baris milik klien lain ada di gudang yang sama dan tidak satu pun terbaca oleh sesi klien yang diuji.",
      },
    ],
    forWho: [
      "Perusahaan yang laporannya masih disusun manual dari beberapa ekspor spreadsheet.",
      "Manajemen yang angkanya berbeda-beda tergantung siapa yang menyiapkan.",
      "Tim yang sudah memakai Odoo dan butuh analitik tanpa membebani server operasional.",
    ],
    limits: [
      "Sumber data non-Odoo bisa dihubungkan, tetapi model dan metriknya dibuat khusus per klien — itu pekerjaan tersendiri, bukan sakelar yang tinggal dinyalakan.",
      "Kesegaran mengikuti target per laporan (60 detik sampai 1 jam, tergantung jenis datanya). Kami menuliskannya di awal, bukan menjanjikan semuanya seketika.",
    ],
    faq: [
      {
        q: "Apakah dasbornya memperlambat ERP kami?",
        a: "Tidak. Insight membaca log replikasi, jalur yang sama dengan yang dipakai Postgres untuk replikasi database, dan kueri dasbor jatuh ke gudang terpisah. Beban kueri analitik tidak pernah mendarat di server yang dipakai tim Anda bekerja.",
      },
      {
        q: "Bagaimana kalau pipeline-nya berhenti?",
        a: "Angka membeku dan ditandai basi, lalu alarm berbunyi ke email operasional. Yang paling berbahaya bukan pipeline yang mati, melainkan pipeline mati yang tampak sehat — itulah yang secara khusus dicegah di sini.",
      },
      {
        q: "Datanya disimpan di mana?",
        a: "Di server Anda sendiri atau di server yang kami kelola atas nama Anda, sesuai kesepakatan. Tidak ada layanan analitik pihak ketiga yang ikut membaca data Anda.",
      },
    ],
    terminal: {
      title: "POST /v1/query — respons dasbor",
      lines: [
        { text: "{", tone: "muted" },
        { text: '  "metric": "penjualan_harian",' },
        { text: '  "rows": 42,' },
        { text: '  "as_of": "2026-09-02T09:14:22+07:00",', tone: "accent" },
        { text: '  "lag_seconds": 0.16,', tone: "ok" },
        { text: '  "stale": false,', tone: "ok" },
        { text: '  "tenant": "dari token, bukan dari parameter"', tone: "muted" },
        { text: "}", tone: "muted" },
      ],
    },
  },
  {
    slug: "odoo",
    index: "02",
    name: "ATHERA ERP",
    status: "Produksi",
    tagline: "Odoo yang mengikuti proses Anda, dan tetap dirawat setelah go-live.",
    summary:
      "Implementasi Odoo 19 dari pemetaan proses sampai serah terima, modul khusus untuk alur kerja yang tidak muat di modul standar, dan perawatan berkelanjutan sesudahnya. Sistem yang tidak dirawat akan ditinggalkan penggunanya, dan itu bagian termahal dari sebuah proyek ERP.",
    highlights: [
      "Pemetaan proses lebih dulu, konfigurasi belakangan.",
      "Modul khusus saat proses Anda memang tidak standar.",
      "Backup, pemantauan, dan pembaruan tetap berjalan setelah proyek selesai.",
    ],
    capabilities: [
      {
        title: "Implementasi bertahap",
        body: "Dirilis per bagian yang langsung bisa dipakai. Anda melihat hasil sejak bulan pertama, bukan setelah enam bulan integrasi besar yang baru terbukti benar atau salah di akhir.",
      },
      {
        title: "Modul khusus, bukan tambal-sulam",
        body: "Ketika proses Anda tidak muat di modul standar, kami menulis modul yang rapi dan bisa di-upgrade — bukan mengubah kode inti Odoo, yang membuat pembaruan versi berikutnya menjadi proyek tersendiri.",
      },
      {
        title: "Pembatasan akses per unit bisnis",
        body: "Cabang, gudang, atau unit usaha bisa dipisah dengan aturan akses yang menutup secara default: pengguna tanpa penugasan tidak melihat apa-apa, alih-alih melihat semuanya.",
      },
      {
        title: "Migrasi data dengan angka pembanding",
        body: "Data lama dipindahkan dengan rekonsiliasi: saldo, stok, dan piutang di sistem baru dicocokkan angkanya dengan sistem lama sebelum go-live dinyatakan selesai.",
      },
      {
        title: "Odoo Care",
        body: "Backup harian yang pemulihannya benar-benar diuji, pemantauan layanan, penanganan insiden, pembaruan keamanan, dan penyesuaian kecil yang selalu muncul begitu sistem dipakai sungguhan.",
      },
      {
        title: "Katalog modul yang dinilai lebih dulu",
        body: "Kami memelihara inventaris 154 modul beserta kematangan dan lisensinya. Modul dipilih dari daftar yang sudah ditimbang, bukan dipasang karena namanya cocok di hasil pencarian.",
      },
    ],
    pipeline: [
      { label: "Pemetaan", caption: "Proses yang sebenarnya berjalan" },
      { label: "Rancangan", caption: "Prioritas dan urutan rilis" },
      { label: "Konfigurasi", caption: "Modul standar dahulu" },
      { label: "Modul khusus", caption: "Hanya untuk yang tidak muat" },
      { label: "Migrasi", caption: "Direkonsiliasi, bukan diperkirakan" },
      { label: "Care", caption: "Backup, pantau, sesuaikan" },
    ],
    evidence: [
      {
        value: "Harian",
        label: "Backup terjadwal",
        note: "Database dan filestore, retensi 14 hari, plus snapshot konfigurasi. Setiap selesai, checksum-nya diverifikasi.",
      },
      {
        value: "Diuji",
        label: "Gladi pemulihan",
        note: "Pemulihan dijalankan ke database salinan dan dicocokkan: metrik baris identik, 461 berkas filestore dengan checksum agregat sama.",
      },
      {
        value: "154",
        label: "Modul terinventarisasi",
        note: "239.000 baris kode dinilai kematangan, lisensi, dan ketergantungannya sebelum satu pun diadopsi ke sistem klien.",
      },
      {
        value: "24/7",
        label: "Pemantauan",
        note: "Layanan, kapasitas, dan kesegaran data dipantau; peringatan dikirim ke email operasional dan sudah terbukti terkirim.",
      },
    ],
    forWho: [
      "Perusahaan yang tumbuh melewati batas kemampuan spreadsheet dan aplikasi terpisah-pisah.",
      "Pengguna Odoo yang implementasinya berhenti di tengah jalan dan butuh dilanjutkan.",
      "Bisnis multi-cabang yang butuh pemisahan akses tanpa memecah sistemnya.",
    ],
    limits: [
      "Kami tidak menjanjikan seluruh perusahaan pindah dalam satu rilis. Ruang lingkup dipecah, dan bagian yang ditunda disebutkan sejak awal.",
      "Perpajakan mengikuti aturan yang berlaku dan modul yang tersedia; integrasi ke sistem pajak pemerintah dinilai kasus per kasus, bukan diklaim tersedia begitu saja.",
    ],
    faq: [
      {
        q: "Kami sudah pakai Odoo tapi berantakan. Bisa dilanjutkan?",
        a: "Bisa, dan biasanya dimulai dengan audit: apa yang sudah dipakai, apa yang dimatikan diam-diam, dan data mana yang sudah tidak dipercaya tim. Perbaikan disusun dari sana, bukan dari nol.",
      },
      {
        q: "Siapa yang memegang kodenya?",
        a: "Anda. Modul khusus diserahkan beserta repositorinya dan dokumentasinya. Anda tidak terkunci pada kami untuk bisa melanjutkan.",
      },
      {
        q: "Apakah harus disimpan di server sendiri?",
        a: "Tidak harus. Bisa di server Anda, di VPS yang kami kelola, atau di penyedia cloud pilihan Anda. Yang kami pastikan sama di semua opsi: backup, pemantauan, dan pemulihan yang teruji.",
      },
    ],
    terminal: {
      title: "gladi pemulihan backup — ringkasan",
      lines: [
        { text: "$ athera-restore --verify --to db_uji", tone: "accent" },
        { text: "memulihkan basis data ......... selesai", tone: "muted" },
        { text: "memulihkan filestore .......... 461 berkas", tone: "muted" },
        { text: "metrik baris    : identik", tone: "ok" },
        { text: "checksum agregat: cocok", tone: "ok" },
        { text: "hasil: pemulihan terbukti, bukan diasumsikan", tone: "ok" },
      ],
    },
  },
  {
    slug: "agent",
    index: "03",
    name: "ATHERA Agent",
    status: "Pratinjau terbatas",
    tagline: "Bertanya dengan bahasa biasa; jawabannya tetap tunduk pada hak akses Anda.",
    summary:
      "Agent menerjemahkan pertanyaan biasa menjadi rencana kueri, lalu ERP Anda yang menjalankannya — di bawah hak akses pengguna yang bertanya, di database perusahaan itu sendiri, dengan aturan penyamaran data pribadi yang sudah berlaku di sana. Modelnya tidak pernah menyentuh baris data Anda.",
    highlights: [
      "Tidak menulis SQL. Ia menyusun rencana yang dijalankan ERP Anda sendiri.",
      "Model bahasa hanya melihat nama kolom, tidak pernah isi tabel.",
      "Pertanyaan tentang data yang tidak boleh Anda lihat tetap tidak terjawab.",
    ],
    capabilities: [
      {
        title: "Layanannya tidak punya jalan ke database",
        body: "Tidak ada koneksi, tidak ada driver, tidak ada rute jaringan ke database Anda. Apa pun yang berhasil dibujukkan kepada modelnya, ia tetap tidak bisa mengambil satu baris pun.",
      },
      {
        title: "Rencana kueri, bukan SQL",
        body: "Keluarannya adalah rencana terstruktur yang dieksekusi ERP melalui lapisan aksesnya sendiri. SQL yang dihasilkan model akan melewati aturan akses pengguna, aturan unit bisnis, dan penyamaran data pribadi sekaligus — karena itu jalur ini ditutup.",
      },
      {
        title: "Skema diberikan, bukan ditemukan sendiri",
        body: "Model hanya diberi tahu tabel dan kolom yang memang boleh dibaca pengguna tersebut. Ia tidak bisa menyebut sesuatu yang tidak ditunjukkan kepadanya.",
      },
      {
        title: "Rencana divalidasi sebelum dijalankan",
        body: "Model atau kolom di luar daftar yang diberikan ditolak sebelum rencana keluar dari layanan. Tabel yang dikarang tidak pernah sampai ke ERP.",
      },
      {
        title: "Tanpa memori lintas pertanyaan",
        body: "Tidak ada penyimpanan percakapan dan tidak ada cache jawaban. Tidak ada tempat di mana kalimat satu perusahaan bisa muncul di jawaban perusahaan lain.",
      },
      {
        title: "Model lokal atau layanan awan — pilihan Anda",
        body: "Bisa berjalan dengan model bahasa yang dijalankan di server Anda sendiri, sehingga tidak ada teks yang meninggalkan mesin, atau dengan layanan awan bila Anda memilih kecepatan dan kualitas jawabannya.",
      },
    ],
    pipeline: [
      { label: "Pertanyaan", caption: "Bahasa sehari-hari" },
      { label: "Skema", caption: "Hanya yang boleh dibaca" },
      { label: "Model", caption: "Menyusun rencana" },
      { label: "Validasi", caption: "Di luar daftar? ditolak" },
      { label: "ERP", caption: "Eksekusi di bawah hak akses" },
      { label: "Jawaban", caption: "Angka dari data Anda" },
    ],
    evidence: [
      {
        value: "0",
        label: "Koneksi database",
        note: "Layanan Agent tidak memegang kredensial database mana pun. Ini sifat arsitektur, bukan konfigurasi yang bisa salah setel.",
      },
      {
        value: "10",
        label: "Uji pagar antar klien",
        note: "Rangkaian uji yang memastikan pertanyaan satu klien tidak pernah menghasilkan data klien lain, dijalankan di setiap perubahan.",
      },
      {
        value: "501",
        label: "Alur yang belum aktif",
        note: "Deteksi anomali dan klasifikasi otomatis menjawab “belum tersedia”, bukan mengarang hasil kosong yang akan dipercaya begitu saja.",
      },
    ],
    forWho: [
      "Manajemen yang ingin bertanya cepat tanpa menunggu antrean permintaan laporan.",
      "Tim operasional yang butuh angka spesifik tetapi tidak nyaman menyusun filter sendiri.",
      "Perusahaan yang tertarik pada AI tetapi tidak bersedia mengirim isi databasenya ke pihak ketiga.",
    ],
    limits: [
      "Masih pratinjau terbatas. Kami menyalakannya per klien, dengan pendampingan, bukan sebagai fitur yang langsung aktif untuk semua orang.",
      "Deteksi anomali dan klasifikasi otomatis belum aktif dan sengaja menolak menjawab, karena jawaban yang salah di dua hal itu akan telanjur dipercaya.",
      "Ia menjawab pertanyaan yang bisa dijawab data Anda. Ia bukan penasihat bisnis, dan kami tidak memasarkannya begitu.",
    ],
    faq: [
      {
        q: "Apakah data kami dipakai melatih model AI?",
        a: "Tidak. Model tidak pernah menerima baris data Anda — hanya nama tabel dan kolom yang relevan dengan pertanyaan. Pada mode model lokal, bahkan pertanyaannya pun tidak meninggalkan server Anda.",
      },
      {
        q: "Bagaimana kalau modelnya salah menjawab?",
        a: "Rencana kueri yang dihasilkan bisa ditampilkan, dan hasilnya berasal dari ERP Anda sendiri sehingga bisa ditelusuri ke transaksi sumbernya. Jawaban yang tidak bisa ditelusuri tidak berguna, seberapa pun meyakinkan bunyinya.",
      },
      {
        q: "Bisakah ia mengubah data?",
        a: "Tidak. Rencana yang dihasilkan hanya membaca. Perubahan data tetap melalui ERP dengan alur persetujuan yang sudah Anda punya.",
      },
    ],
    terminal: {
      title: "rencana kueri yang dihasilkan Agent",
      lines: [
        { text: '> "Berapa penjualan cabang Bandung bulan lalu?"', tone: "accent" },
        { text: "{", tone: "muted" },
        { text: '  "model": "sale.order",' },
        { text: '  "domain": [["state","=","sale"],["branch","=","Bandung"]],' },
        { text: '  "fields": ["amount_total"],' },
        { text: '  "sql": null,', tone: "warn" },
        { text: '  "dieksekusi_oleh": "Odoo, di bawah hak akses penanya"', tone: "ok" },
        { text: "}", tone: "muted" },
      ],
    },
  },
];

export function productBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
