/**
 * Seluruh teks situs ada di file ini.
 *
 * Untuk mengubah isi website, sunting file ini saja — tidak perlu menyentuh
 * komponen tampilan. Bagian yang ditandai TODO berisi placeholder yang harus
 * diganti dengan data Athera Digital yang sebenarnya.
 */

export const company = {
  name: "Athera Digital Solution",
  shortName: "Athera Digital",
  domain: "athera-digital.com",
  tagline: "Sistem bisnis yang benar-benar dipakai tim Anda",
  email: "info@athera-digital.com",
  // TODO: ganti dengan nomor dan alamat asli, atau hapus barisnya kalau belum mau ditampilkan.
  phone: null as string | null,
  address: null as string | null,
};

export const hero = {
  eyebrow: "Konsultan & pengembang sistem bisnis",
  title: "Sistem bisnis yang benar-benar dipakai tim Anda",
  description:
    "Kami merancang, membangun, dan merawat ERP, dashboard, serta aplikasi internal untuk perusahaan yang sudah melewati fase spreadsheet — dan mulai kehilangan jejak datanya sendiri.",
  primaryCta: { label: "Diskusikan kebutuhan Anda", href: "#kontak" },
  secondaryCta: { label: "Lihat layanan", href: "#layanan" },
};

export type Service = {
  id: string;
  name: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "odoo",
    name: "Implementasi Odoo ERP",
    summary:
      "Menyatukan penjualan, pembelian, stok, dan keuangan ke satu sistem — tanpa memaksa tim Anda mengubah cara kerja yang sudah terbukti jalan.",
    points: [
      "Pemetaan proses bisnis sebelum satu baris konfigurasi ditulis",
      "Migrasi data dari spreadsheet dan sistem lama",
      "Kustomisasi modul sesuai alur kerja, bukan sebaliknya",
      "Pelatihan tim dan pendampingan setelah go-live",
    ],
  },
  {
    id: "insight",
    name: "Ethera Insight",
    summary:
      "Dashboard analitik yang menarik data dari ERP, aplikasi operasional, dan sumber lain, lalu menyajikannya dalam satu layar yang bisa dipercaya.",
    points: [
      "Indikator kunci yang relevan dengan keputusan harian",
      "Data tergabung dari beberapa sumber sekaligus",
      "Akses berjenjang untuk manajemen dan operasional",
      "Laporan terjadwal langsung ke email",
    ],
  },
  {
    id: "custom",
    name: "Aplikasi Web Custom",
    summary:
      "Ketika kebutuhan Anda tidak muat di produk jadi. Kami membangun aplikasi yang pas dengan proses Anda, bukan sekadar yang cepat dirilis.",
    points: [
      "Portal internal, sistem approval, dan aplikasi lini bisnis",
      "Integrasi dengan sistem yang sudah berjalan",
      "Dibangun dengan teknologi yang mudah dirawat jangka panjang",
      "Dokumentasi dan serah terima kode yang jelas",
    ],
  },
  {
    id: "infra",
    name: "Infrastruktur & Operasional",
    summary:
      "Server, deployment, pemantauan, backup, dan email domain. Bagian yang tidak terlihat pelanggan, tapi paling terasa saat bermasalah.",
    points: [
      "Penyiapan dan pengerasan server produksi",
      "Mail server domain sendiri dengan SPF, DKIM, dan DMARC",
      "Backup terjadwal beserta uji pemulihannya",
      "Pemantauan dan penanganan insiden",
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
    "Athera Digital Solution membantu perusahaan menengah membereskan tulang punggung operasionalnya: ERP yang benar-benar mencerminkan proses bisnis, dashboard yang datanya bisa dipertanggungjawabkan, dan aplikasi internal yang tidak menambah pekerjaan baru.",
    "Kami mengerjakan keseluruhannya — dari pemetaan proses, pengembangan, sampai server dan email yang menopangnya. Sehingga tidak ada bagian yang saling menunggu, dan tidak ada yang menyalahkan pihak lain saat ada masalah.",
  ],
  // TODO: ganti dengan poin pembeda yang benar-benar mencerminkan Athera Digital.
  highlights: [
    {
      title: "Satu pihak, satu tanggung jawab",
      description:
        "Aplikasi, data, dan infrastruktur ditangani tim yang sama, sehingga tidak ada celah antar vendor.",
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
  ],
};

export const contact = {
  title: "Mari bicara soal kebutuhan Anda",
  description:
    "Ceritakan kondisi sistem Anda sekarang dan apa yang paling menghambat. Kami akan menanggapi dengan gambaran pendekatan yang masuk akal — bukan langsung penawaran harga.",
};

export const nav = [
  { label: "Layanan", href: "#layanan" },
  { label: "Pendekatan", href: "#pendekatan" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];
