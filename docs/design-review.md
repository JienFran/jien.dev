# Design review dan arah redesain

Acuan identitas: `plan.md` (gelap, eksperimental, cyber/Y2K, dreamy, editorial; hitam, violet, lavender; informasi terstruktur + dekorasi kacau).

## 1. Kritik terhadap versi sebelumnya

Secara aset, versi lama punya bahan yang bagus (kalender, jam, kolase mata/tangan/siluet, player, CRT). Yang membuatnya terasa seperti blog Neocities adalah cara semuanya disusun.

| # | Masalah | Dampak |
|---|---|---|
| 1 | Kerangka tiga kolom tetap (menu kiri, widget kiri, kolase kanan) dengan kolom isi hanya ±536px di tengah kanvas yang luas. Ini pola frameset/blog era 2000-an. | Konten terpenting (project) paling kecil dan paling bawah. Widget bersaing dengan isi. |
| 2 | Semua hal memakai satu perlakuan: kotak ungu translusen yang sama untuk Introduction, Skills, player, dan sosial. | Tidak ada hierarki. Mata tidak tahu harus mulai dari mana. |
| 3 | Tipografi tanpa skala. Judul "about me" hanya sedikit lebih besar dari teks. Label kecil ungu bertracking lebar di atas latar ungu (kontras ±3:1). Efek chromatic text-shadow di judul dan menu. | Terasa gimmick dan menurunkan keterbacaan. Tidak ada momen poster/editorial seperti di reference board. |
| 4 | Filter CRT berada di atas semua elemen, termasuk teks. | Scanline menimpa teks dan menurunkan kontras. Efek seharusnya jadi tekstur latar dan gambar, bukan lapisan di atas bacaan. |
| 5 | "Kolase" berupa grid foto berbingkai tebal dengan ukuran seragam. | Terbaca sebagai galeri thumbnail. plan.md meminta overlap, asimetri, dan ruang kosong. |
| 6 | Tidak ada hero, pernyataan diri, atau ajakan bertindak. Skills berupa bullet list. Project tertimbun di bawah. | Pengunjung tidak tahu siapa pemiliknya, apa yang bisa dilakukan, atau ke mana harus klik. |
| 7 | Bentuk tidak konsisten: kalender membulat, kotak lain persegi, tile sosial radius kecil, foto bingkai tebal. | Tampak tidak terencana. |
| 8 | Hampir tidak ada interaksi selain jam. Tidak ada respons saat hover/fokus pada elemen utama. | Terasa statis seperti halaman cetak. |
| 9 | Kolom samping sticky setinggi layar. Di laptop pendek harus dikompromikan, di mobile kolase mendorong isi ke bawah. | Rapuh di banyak ukuran layar. |
| 10 | Placeholder berupa kotak gradien ungu polos. | Terbaca sebagai wireframe. |

## 2. Rencana desain

### Konsep
**Viewfinder editorial.** Halaman diperlakukan seperti keluaran sistem deteksi objek yang dicetak sebagai poster: tipografi condensed raksasa, foto yang "dikunci" oleh bracket sudut, dan sisanya tenang. Konsep ini dipilih karena langsung berasal dari materi Anda: motif mata, kotak deteksi wajah di moodboard, dan skill computer vision/OCR di plan.md. Ini juga berbeda dari kit generik kartu-kartu rounded.

### Warna (token plan.md tetap sumber kebenaran)
| Nama | Hex | Peran |
|---|---|---|
| Void | `#050407` | latar utama |
| Surface | `#111019` | permukaan player dan kalender |
| Violet | `#7847F5` | tombol utama dan aksen aktif |
| Lavender | `#B8A0F0` | bracket, garis, judul sekunder |
| Pale | `#E1D8FF` | judul poster dan teks kontras tinggi |
| Muted | `#AAA3B8` | teks pendukung |

Aksen terang dipakai hemat: violet hanya untuk tombol utama dan satu glow di belakang hero. Tidak ada gradien dekoratif di kartu.

### Tipografi
- **Display:** Big Shoulders Display 800/900, huruf kapital, rapat. Dipakai besar untuk nama, judul section, kata skill, dan judul project. Ini wujud "poster typography" dari plan.md.
- **Body:** Instrument Sans 400/500/600, kalimat biasa (sentence case). Label kecil tidak memakai huruf kapital bertracking.
- Skala: poster `clamp(4rem, 12vw, 11rem)`, judul section `clamp(3rem, 6.5vw, 6rem)`, pernyataan `clamp(1.5rem, 2.6vw, 2.35rem)`, body 1rem/1.65. Panjang baris dijaga di bawah 70 karakter.

### Tata letak
```
┌─────────────────────────────────────────────────────────────┐
│ YOUR NAME                      About Skills Projects …      │ nav (menyatu dengan latar)
│                                                             │
│  YOUR                       ┌─eyes──────────┐               │
│  NAME                  ┌hand┐└───────────────┘ ┌figure┐      │
│  role                  │    │  ┌eye┐    (jam)  │      │      │
│  intro                 └────┘  └───┘           └──────┘      │
│  (View projects)(Get in touch)                              │
├─────────────────────────────────────────────────────────────┤
│ Pernyataan besar (kiri)                  │ Kalender (kanan) │
├─────────────────────────────────────────────────────────────┤
│ FRONTEND   ........ skill, skill, skill                     │ baris tipografi raksasa
│ BACKEND    ........                                         │
├─────────────────────────────────────────────────────────────┤
│ [media 7 kolom]            judul + ringkasan + tautan       │ project berselang-seling
├─────────────────────────────────────────────────────────────┤
│ 2026   Nama sertifikat                     Penyelenggara    │
├─────────────────────────────────────────────────────────────┤
│ SAY HELLO (outline raksasa)  [Instagram][WhatsApp][X]       │
│ barcode                                          © tahun    │
└─────────────────────────────────────────────────────────────┘
                 ( player melayang di tengah bawah )
```
Rata kiri untuk semua teks. Konten memakai satu wadah selebar maksimum 80rem dengan margin lega.

### Prinsip
1. **Satu momen berani:** hero. Kolase asimetris dengan bracket yang "mengunci" tiap foto saat halaman dimuat, lalu bereaksi saat disorot (bracket melebar, muncul label kelas objek seperti "eyes", "hand").
2. **Sisanya tenang:** hairline, tipografi, dan ruang kosong. Tidak ada kartu seragam.
3. **Struktur membawa makna:** bracket hanya untuk gambar dan elemen yang bisa "dideteksi". Garis tipis memisahkan section. Tidak ada penomoran karena isi bukan urutan.
4. **Bentuk punya aturan:** bidang gambar persegi seperti frame film. Objek yang bisa disentuh (tombol, player, kalender, jam) membulat.
5. **CRT sebagai tekstur:** lapisan kuat berada di bawah konten (latar dan gambar), lapisan tipis di atas hanya scanline dan vignette sangat ringan.
6. **Gerak hemat:** satu urutan saat load di hero, selebihnya respons terhadap aksi pengguna (hover, fokus, klik). Tidak ada animasi masuk per section.

## 3. Review terhadap rencana awal
Ide pertama saya adalah grid bento berisi kartu kaca, spotlight kursor, reveal saat scroll, marquee, dan mesh gradient. Setelah diuji terhadap brief, itu adalah kit generik yang bisa dipasang di situs apa saja dan bertentangan dengan karakter "poster + viewfinder" Anda. Yang saya ubah:
- Kartu bento diganti tata letak editorial dengan hairline dan tipografi raksasa.
- Marquee dan reveal per section dibuang; gerak dipusatkan di hero.
- Mesh gradient diganti satu glow violet di belakang hero.
- Label kecil huruf kapital dan penomoran dibuang; judul section cukup satu kata biasa.

## 4. Yang dipertahankan dari identitas awal
Palet hitam/violet/lavender; kolase mata, tangan, siluet; kalender dan jam yang berfungsi; barcode; player; ikon sosial; filter CRT; latar kota blur; motif kotak deteksi; struktur terstruktur + dekorasi kacau; aksesibilitas dan reduced-motion sesuai plan.md.

## 5. Revisi 2 (umpan balik pemilik)
- Menu tetap vertikal (kiri, selalu terlihat, berlabel "Menu", garis + warna untuk item aktif); di layar kecil jadi tombol "Menu" yang membuka daftar vertikal.
- Foto hero tidak pernah miring (tanpa rotasi, juga saat hover; hover hanya memperbesar sedikit).
- Lebih artistik: kolase ala moodboard (figur, strip mata, tangan, kupu-kupu, langit, mata anime, jam, strip palet), bingkai lavender tipis, panel ungu translusen, judul huruf kecil dengan glitch kromatik, kota blur lebih terlihat, ikon kecil di judul "about me".
- Skills: tiap skill boleh teks saja atau { name, logo } (logo + teks).
- Accomplishments: logo + teks, plus beberapa gambar (sertifikat, foto tim) yang bisa diklik. Lihat komentar di src/data/content.js.
