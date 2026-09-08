"""Bangun seluruh aset logo dari `assets/logo-source.jpg`.

    python3 scripts/build-logo-assets.py     # butuh Pillow

Jalankan ini setiap kali logonya berganti, lalu perbarui token warna di
`src/app/globals.css` dari logo yang baru — nilai-nilai di sana disampel dari
berkas ini, bukan dipilih terpisah.

Latar logo BUKAN hitam: kanal birunya duduk di 24-32 (p90=27, maks=32), jadi
alfa yang diambil dari `max(r,g,b)` mentah tidak pernah mencapai nol dan seluruh
latar bertahan pada alfa 13-25 — tak terlihat di atas latar gelap, terbaca
sebagai kotak begitu diletakkan di atas permukaan yang lebih terang seperti
footer. Alfa karena itu dihitung dari KELEBIHAN di atas warna latar, dengan
sedikit tanjakan supaya derau JPEG di sekitar ambang tidak jadi bintik.
"""
from PIL import Image
import os

SRC = os.path.join(os.path.dirname(__file__), "..", "assets", "logo-source.jpg")
OUT = os.path.join(os.path.dirname(__file__), "..")
BG = (4, 7, 33)     # p90 latar + margin derau JPEG
KNEE = 10           # di bawah ini murni derau blok JPEG -> nol
BRAND_BG = (2, 4, 26, 255)

def to_rgba(img):
    px = img.load(); w, h = img.size
    o = Image.new("RGBA", (w, h)); op = o.load()
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            r = max(0, r - BG[0]); g = max(0, g - BG[1]); b = max(0, b - BG[2])
            a = max(r, g, b)
            if a <= KNEE:
                op[x, y] = (0, 0, 0, 0); continue
            # tanjakan pendek: alfa yang baru lewat ambang tidak melompat ke penuh
            a = int((a - KNEE) * 255.0 / (255.0 - KNEE))
            if a <= 0:
                op[x, y] = (0, 0, 0, 0); continue
            f = 255.0 / max(r, g, b)
            op[x, y] = (min(255, int(r*f)), min(255, int(g*f)), min(255, int(b*f)), a)
    return o

im = Image.open(SRC).convert("RGB")
mark = to_rgba(im.crop((351, 145, 1186, 682)))  # dilebarkan: pendar cincin orbit ikut utuh
full = to_rgba(im.crop((300, 165, 1240, 810)))

def square(img):
    s = max(img.size)
    c = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    c.paste(img, ((s - img.width)//2, (s - img.height)//2), img)
    return c

def put(img, name, **kw):
    p = os.path.join(OUT, name)
    img.save(p, **kw)
    print(f"{name:<32} {img.size[0]}x{img.size[1]:<5} {os.path.getsize(p)/1024:6.1f} KB")

# Ukuran = ukuran render x2; berkasnya dilayani apa adanya (unoptimized).
put(mark.resize((270, 174), Image.LANCZOS), "public/athera-mark.webp",
    format="WEBP", quality=88, method=6, alpha_quality=100)
put(full.resize((480, 329), Image.LANCZOS), "public/athera-logo.webp",
    format="WEBP", quality=84, method=6, alpha_quality=100)

msq = square(mark)
put(msq.resize((512, 512), Image.LANCZOS), "src/app/icon.png", format="PNG", optimize=True)
put(msq.resize((180, 180), Image.LANCZOS), "src/app/apple-icon.png", format="PNG", optimize=True)

ico = Image.new("RGBA", msq.size, BRAND_BG); ico.alpha_composite(msq)
ico.resize((64, 64), Image.LANCZOS).save(os.path.join(OUT, "src/app/favicon.ico"),
                                         format="ICO", sizes=[(16,16),(32,32),(48,48)])
print("src/app/favicon.ico             ", os.path.getsize(os.path.join(OUT,"src/app/favicon.ico"))//1024, "KB")

og = Image.new("RGBA", (1200, 630), BRAND_BG)
og.alpha_composite(full.resize((760, 521), Image.LANCZOS), ((1200-760)//2, (630-521)//2))
og.convert("RGB").save(os.path.join(OUT, "src/app/opengraph-image.jpg"), quality=90, optimize=True)
print("src/app/opengraph-image.jpg     ", os.path.getsize(os.path.join(OUT,"src/app/opengraph-image.jpg"))//1024, "KB")
