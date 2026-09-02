# athera-digital-website

Situs company profile [athera-digital.com](https://athera-digital.com) —
Athera Digital Solution.

## Teknologi

- [Next.js 16](https://nextjs.org) (App Router) dengan React 19
- TypeScript
- Tailwind CSS v4
- Build dengan Turbopack, output `standalone`

Halaman dirender sepenuhnya di server dan di-prerender saat build. Tidak ada
client component sama sekali — menu pada layar kecil memakai elemen `<details>`
bawaan HTML, sehingga situs tetap berfungsi penuh tanpa JavaScript.

## Menjalankan secara lokal

```bash
npm install
npm run dev      # http://localhost:3000
```

Perintah lain:

```bash
npm run build    # build produksi
npm run start    # menjalankan hasil build
npm run lint     # ESLint
```

## Mengubah isi situs

**Seluruh teks situs ada di [`src/lib/site.ts`](src/lib/site.ts).** Untuk mengubah
konten, sunting file itu saja — komponen tampilan membacanya, jadi tidak perlu
menyentuh JSX.

Bagian yang ditandai `TODO` di file tersebut masih berisi placeholder dan perlu
diganti dengan data yang sebenarnya.

## Struktur

```
src/
├── app/
│   ├── layout.tsx      # kerangka halaman, metadata, font
│   ├── page.tsx        # halaman utama beserta seluruh seksinya
│   └── globals.css     # token tema (mode terang & gelap)
├── components/
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   └── wordmark.tsx
└── lib/
    └── site.ts         # SELURUH KONTEN SITUS ADA DI SINI
```

## Tema

Warna didefinisikan sebagai CSS custom property di `globals.css` dan dipetakan
ke Tailwind lewat blok `@theme inline`. Mode gelap mengikuti preferensi sistem
pengunjung melalui `prefers-color-scheme` — tidak ada tombol pengalih tema.

Untuk mengubah warna aksen, cukup ubah `--accent`, `--accent-soft`, dan
`--accent-contrast` pada kedua blok (terang dan gelap).

## Deployment

Situs berjalan sebagai service systemd di belakang reverse proxy, memakai
output `standalone` Next.js agar bundel runtime tetap minimal.

Proses build dan pemasangan dijalankan oleh skrip `athera-web-deploy` di server.
Perlu diperhatikan: `.next/static` dan `public/` **tidak** ikut ke dalam
direktori `standalone` secara otomatis dan harus disalin terpisah — kalau
terlewat, situs akan tampil tanpa CSS.

## Catatan untuk AI coding agent

Repo ini memuat `AGENTS.md` yang dihasilkan Next.js 16. Baca dokumentasi di
`node_modules/next/dist/docs/` sebelum menulis kode, karena versi ini
mengandung sejumlah perubahan breaking dibanding versi sebelumnya.
