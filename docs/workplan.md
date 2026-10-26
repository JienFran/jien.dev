# Workplan v2 — Personal Portfolio Website

Sumber kebenaran: `plan.md` (visual, konten, aksesibilitas, definition of done).
Struktur folder: `structure.txt` (React + Vite + Tailwind).
Referensi visual: **moodboard** dan **reference board** yang sudah dilampirkan (analisis di bawah).
Alur kerja: satu fase = satu commit/branch terarah, dicek sebelum lanjut.

> Perubahan dari v1 ditandai **[REVISI]**.

---

## A. Analisis referensi visual **[REVISI — bagian baru]**

### A.1 Moodboard (papan 1)

| Elemen di moodboard | Ciri visual | Pemakaian di website |
|---|---|---|
| Siluet figur ungu di latar hitam | Glow lavender, tubuh setengah transparan | Aksen kolase hero (versi karya sendiri/berlisensi) |
| Ikon mata dicoret di atas gradien ungu-teal blur | Gradien kabur + grain, ikon UI kecil | Motif "eye" sebagai ikon/penanda section; label kecil |
| Tangan memegang bulan sabit, langit berbintang | Tekstur noise ungu | Dekorasi section About atau latar footer |
| Kupu-kupu putih bercahaya di biru gelap | Glow lembut, negative space besar | Motif kupu-kupu di hero dan footer (kecil, tidak dominan) |
| Logo "DVD Video" ungu | Referensi media retro | **Jangan direproduksi** (logo merek). Ganti dengan motif generik buatan sendiri: label "disc / media" bergaya retro-Y2K |
| Strip swatch 4 warna | Lavender, mauve gelap, hitam, ungu | Dasar token warna |
| Langit berawan ungu + siluet kucing | Foto nostalgia, tone ungu | Latar tipis atau gambar section About |
| Close-up mata anime magenta/biru | Saturasi tinggi, kontras kuat | Aksen hero (satu fokus, bukan di mana-mana) |
| Potret blur dengan kotak "bounding box" ala deteksi wajah + glitch | Frame UI tipis di atas foto | **Motif utama UI**: frame/kotak deteksi tipis sebagai bingkai gambar. Selaras dengan skill computer vision/OCR |

Ciri umum: dominan hitam, fragmen gambar kecil acak, ruang kosong luas, suasana malam, melankolis, low-res/glitch.

### A.2 Reference board (papan 2)

| Elemen | Ciri | Pemakaian |
|---|---|---|
| Jendela bergaya OS pastel ("Abilities": sidebar folder, panel kotak ikon, bilah pencarian, tombol navigasi) | Window chrome, struktur file explorer | **Section Skills** sebagai "jendela abilities": sidebar kategori + panel isi |
| Panel profil dengan avatar, nama, field label | Kartu ID kompak | **Panel profil Hero** |
| Panel "Software Skills" dengan ikon aplikasi dan bilah | Ikon + progress bar | Daftar tools dengan ikon. **Bilah hanya bila Anda menentukan nilainya** (aturan plan.md §5.4) |
| Daftar tahun + institusi ("learning") | Timeline vertikal | **Section Certifications & Competitions** sebagai timeline |
| Poster "Midnight Queen / Companion" (banyak mata, blok teks, pola garis, barcode, teks CJK) | Padat, kondensed, simbol dekoratif, kartu ID | Blok penutup/footer bergaya poster, dengan teks dan nama milik Anda sendiri |
| Kartu palet: Chinese Black, Persian Indigo, Majorelle Blue, Vodka, Max Blue Purple | Swatch + kode HEX/RGB/CMYK | Panduan nama dan urutan warna (lihat A.3) |

Prinsip tetap dari plan.md: **informasi terstruktur + dekorasi kacau**. Panel konten rapi, dekorasi (kolase, grain, glow) berada di luar teks.

### A.3 Palet warna **[REVISI]**

Token di `plan.md` §3 tetap menjadi sumber kebenaran. Dari reference board, nama-nama warna dipetakan ke token terdekat:

| Nama di board | Token terdekat | Catatan |
|---|---|---|
| Chinese Black | `--color-bg` / `--color-surface` | Latar utama |
| Persian Indigo | **token baru** `--color-indigo` (diusulkan, ungu-indigo gelap) | Untuk gradien dan panel raised |
| Majorelle Blue | `--color-purple` | Aksen utama / state aktif |
| Max Blue Purple | `--color-purple-bright` / `--color-lavender` | Highlight, link |
| Vodka | `--color-lavender-pale` | Label kecil, detail kontras |

> Kode HEX pada gambar terlalu kecil untuk dibaca dengan pasti, jadi saya **tidak** mengarang nilainya. Nilai HEX tetap memakai plan.md; `--color-indigo` akan saya tentukan saat implementasi dan Anda bisa menimpanya. Jika Anda punya HEX asli dari board, kirimkan.

### A.4 Aturan penggunaan aset referensi **[REVISI]**

- Kedua board disimpan hanya di `docs/references/` sebagai acuan. **Bukan** di `public/` dan tidak ikut deploy (plan.md §6: gambar referensi belum tentu bebas dipakai ulang).
- Tidak menyalin teks, nama, atau logo dari board (nama profil di panel pastel, "Midnight Queen", logo DVD, teks CJK).
- Visual di website berasal dari: aset milik sendiri, aset berlisensi, atau efek CSS/SVG buatan sendiri.
- Perlakuan gambar diseragamkan lewat filter CSS: grayscale + overlay duotone ungu (`mix-blend-mode`), grain, sedikit blur. Dengan begitu gambar campuran terasa satu gaya.

---

## B. Keputusan teknis

| Hal | plan.md | structure.txt | Keputusan |
|---|---|---|---|
| Framework | Next.js "default wajar", tapi ikuti setup yang ada | Vite + React | **Vite + React (JavaScript)**, statis |
| Folder section | `sections/` disarankan | Semua di `src/components/` | Ikuti `structure.txt` |
| Styling | Satu sistem | Tailwind + `index.css` | **Tailwind CSS v3** + CSS variable untuk token |
| Certifications, MusicPlayer | Tidak ada | Ada | Ditambahkan; tunduk pada aturan aksesibilitas dan motion plan.md |
| Font | Maks. 2–3 keluarga | — | **[REVISI]** usulan: display kondensed (mis. Bebas Neue/Anton), aksen pixel (mis. Silkscreen/VT323) untuk label kecil, body sans-serif bersih (mis. Inter/DM Sans). Tiga keluarga, dengan fallback |

---

## Fase 0 — Persiapan lingkungan

- [ ] Node.js LTS (≥ 18) dan Git terpasang: `node -v`, `npm -v`, `git --version`
- [ ] Identitas git:
  ```bash
  git config --global user.name "Nama Anda"
  git config --global user.email "email@anda.com"
  ```
- [ ] Kumpulkan: kedua board (sudah ada), aset gambar milik sendiri/berlisensi, MP3 berlisensi
- [ ] Konten yang dikonfirmasi: nama/alias, role, intro, skills (+ grup), project (+ link repo/demo), sertifikasi/kompetisi (+ tahun), link kontak yang boleh publik
- [ ] **[REVISI]** Putuskan avatar/foto profil (milik sendiri atau ilustrasi/placeholder)

## Fase 1 — Direktori lokal & Git

```bash
mkdir my-portfolio && cd my-portfolio
git init -b main
mkdir -p docs/references
```

- [ ] `.gitignore` (node_modules, dist, .env, .DS_Store, *.log)
- [ ] Salin `plan.md`, `structure.txt`, `workplan.md` ke `docs/`
- [ ] **[REVISI]** Simpan moodboard dan reference board di `docs/references/` (mis. `moodboard.png`, `reference-board.png`)
- [ ] Commit: `chore: init repository, planning docs, and visual references`
- [ ] (Opsional) remote GitHub: `git remote add origin <url>` lalu `git push -u origin main`
- [ ] Branch kerja: `git switch -c feat/foundation`

## Fase 2 — Scaffold Vite + React + Tailwind

```bash
npm create vite@latest . -- --template react
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

- [ ] Bersihkan boilerplate Vite
- [ ] Buat `src/components`, `src/data`, `public/images`, `public/audio`
- [ ] `tailwind.config.js` → `content: ["./index.html", "./src/**/*.{js,jsx}"]`
- [ ] Directive Tailwind di `src/index.css`
- [ ] Opsional: `lucide-react` hanya bila ikon membantu
- [ ] Verifikasi `npm run dev` dan `npm run build`
- [ ] Commit: `chore: scaffold vite react tailwind`

## Fase 3 — Design foundation (plan.md §3, §4)

- [ ] Token warna sebagai CSS variable: `--color-bg #050407`, `--color-surface #111019`, `--color-surface-raised #1B1725`, `--color-purple #7847F5`, `--color-purple-bright #A45BFF`, `--color-lavender #B8A0F0`, `--color-lavender-pale #E1D8FF`, `--color-text #F3F0FA`, `--color-text-muted #AAA3B8`, `--color-border #393044`
- [ ] **[REVISI]** Tambah `--color-indigo` (Persian Indigo) untuk gradien/panel raised
- [ ] Petakan token ke `theme.extend.colors` (tidak ada hex tersebar di komponen)
- [ ] Muat font (maks. 3 keluarga) dengan fallback; skala tipografi: judul halaman, judul section, judul kartu, body, caption; label kecil uppercase
- [ ] **[REVISI]** Utility bersama untuk bahasa visual referensi:
  - `.panel` (surface + border tipis + label header kecil)
  - `.window` (chrome ala OS: bar judul, tiga titik/tombol, bilah alamat/pencarian dekoratif)
  - `.frame-detect` (bingkai tipis ala bounding box dengan tanda sudut)
  - `.tint-violet` (duotone ungu untuk gambar), `.grain`, `.scanlines` (intensitas rendah)
- [ ] Global: smooth scroll, focus ring terlihat, `@media (prefers-reduced-motion: reduce)` mematikan animasi dan smooth scroll
- [ ] Commit: `feat: design tokens, typography, shared visual utilities`

## Fase 4 — Data layer (plan.md §11)

`src/data/content.js` dengan bentuk `SkillGroup`, `Project`, `SocialLink`:

- [ ] `profile` (nama, role, intro, about, metadata opsional)
- [ ] `skillGroups[]` — `{ title, skills[] }`. **[REVISI]** tiap skill boleh punya `icon` opsional; `level` hanya jika Anda yang menentukan
- [ ] `projects[]` — `{ title, summary, role?, technologies[], image?, repositoryUrl?, demoUrl?, status? }`
- [ ] `certifications[]` — judul, penyelenggara, tahun, link bukti. **[REVISI]** diurutkan untuk timeline
- [ ] `socialLinks[]` — hanya yang disetujui
- [ ] `playlist[]` — judul, artis, path `/audio/...`
- [ ] Isi dengan konten asli; yang kosong ditandai `TODO` (cek dengan `grep -rn TODO src/`)
- [ ] Commit: `feat: structured content data`

## Fase 5 — Page skeleton

- [ ] `App.jsx`: `Navbar → main(Hero, About, Skills, Projects, Certifications) → Footer` + `MusicPlayer`
- [ ] Landmark semantik, satu `h1`, `section` dengan `aria-labelledby`
- [ ] `Navbar.jsx`: anchor smooth scroll, ringkas di mobile, tidak menutupi konten, target sentuh nyaman, skip-link
- [ ] Commit: `feat: page skeleton and navigation`

## Fase 6 — Hero & profile **[REVISI]**

- [ ] Dua kolom asimetris di desktop, satu kolom di mobile
- [ ] **Kolom informasi:** panel profil bergaya kartu ID (avatar, nama/alias, role, intro, label field kecil), CTA ke Projects/Skills/Contact, link eksternal
- [ ] **Kolom visual:** kolase fragmen kecil acak dengan ruang kosong luas, seperti moodboard
  - Maksimal 3–4 motif: mata, kupu-kupu, tekstur ungu/langit, satu frame-detect
  - Fragmen berbingkai `.frame-detect` + `.tint-violet`
  - Placeholder CSS/SVG berlabel jelas bila aset belum ada
- [ ] Teks dan CTA tidak boleh tertutup dekorasi; `alt=""` untuk dekoratif
- [ ] Commit: `feat: hero profile card and collage`

## Fase 7 — About, Skills, Projects, Certifications **[REVISI]**

- [ ] **About:** satu paragraf jujur, metadata opsional, satu gambar kecil (langit/kucing sebagai arah visual, versi sendiri)
- [ ] **Skills — "jendela abilities":** `.window` dengan sidebar kategori (dari `skillGroups`) dan panel isi berupa kotak ikon/tag. Pada mobile sidebar jadi tab/akordeon. Bilah hanya bila ada nilai dari Anda
- [ ] **Projects:** kartu rapi + beberapa kartu fitur besar bergaya poster/editorial; thumbnail dengan tint ungu; hover dan focus-visible setara; elemen kosong disembunyikan otomatis
- [ ] **Certifications & Competitions — timeline:** daftar tahun + institusi/kompetisi ala panel "learning"
- [ ] Commit per section
- [ ] Rencana referensi: berpindah ke penutup poster di Fase 8

## Fase 8 — Footer/Contact & Music Player **[REVISI]**

- [ ] **Footer bergaya poster/kartu ID:** huruf display kondensed besar, pola garis/barcode dekoratif (CSS), motif mata/kupu-kupu kecil, label "contact"/"links", link dari `socialLinks`, focus state terlihat. Teks milik Anda sendiri
- [ ] **MusicPlayer.jsx:** widget bergaya jendela kecil retro (bukan logo DVD), sumber `public/audio/`
  - Tanpa autoplay; play/pause, next/prev, volume/mute dengan `aria-label` dan keyboard
  - Bisa diciut; tidak menutupi konten di mobile
  - Hanya musik yang Anda berhak pakai
- [ ] Commit: `feat: poster footer and music player`

## Fase 9 — Dekorasi & interaksi (plan.md §6, §7)

- [ ] Grain, scanline, blur, glitch halus secara hemat dan konsisten
- [ ] Hover: card lift/perubahan border, dengan padanan `:focus-visible`
- [ ] Reveal saat scroll (IntersectionObserver) tanpa menunda akses konten
- [ ] Tanpa flicker agresif; semua animasi mati bila reduced-motion
- [ ] Info penting tidak hanya muncul saat hover/animasi
- [ ] Commit: `feat: decorative effects and restrained motion`

## Fase 10 — Responsif & aksesibilitas (plan.md §8, §9)

- [ ] Uji 360 / 768 / 1024 / 1440 px; tidak ada overflow horizontal (cek teks display dan elemen `absolute`)
- [ ] Tablet: kurangi overlap; mobile: satu kolom, dekorasi masuk alur normal
- [ ] Navigasi keyboard penuh, focus ring terlihat
- [ ] Kontras teks ≥ WCAG AA, terutama di atas gradien/gambar (tambah overlay)
- [ ] Uji dengan reduced-motion
- [ ] Lighthouse (Accessibility, Performance, Best Practices); gambar WebP, `loading="lazy"`
- [ ] Commit: `fix: responsive and accessibility pass`

## Fase 11 — Quality checks (plan.md §12.9)

```bash
npm run lint
npm run build
npm run preview
```

- [ ] Tidak ada error di console, aset hilang, atau link rusak
- [ ] `grep -rn TODO src/` kosong atau disengaja
- [ ] **[REVISI]** Pastikan `docs/references/` tidak ada di `public/` atau `dist/`
- [ ] Tidak ada secret di kode klien
- [ ] Centang seluruh Definition of Done (plan.md §13)
- [ ] Commit: `chore: final checks`

## Fase 12 — Deploy (statis)

- [ ] Merge ke `main`, `git tag v1.0.0`
- [ ] Hosting statis (Vercel / Netlify / Cloudflare Pages / GitHub Pages): build `npm run build`, output `dist`; GitHub Pages butuh `base` di `vite.config.js`
- [ ] Verifikasi situs live di desktop dan ponsel (anchor, music player)
- [ ] Update `README.md`: cara menjalankan, cara mengubah konten di `src/data/content.js`, cara mengganti aset

---

## Urutan commit

1. `chore: init repository, planning docs, and visual references`
2. `chore: scaffold vite react tailwind`
3. `feat: design tokens, typography, shared visual utilities`
4. `feat: structured content data`
5. `feat: page skeleton and navigation`
6. `feat: hero profile card and collage`
7. `feat: about / skills / projects / certifications`
8. `feat: poster footer and music player`
9. `feat: decorative effects and restrained motion`
10. `fix: responsive and accessibility pass`
11. `chore: final checks`

## Yang masih perlu dari Anda

- Konten terkonfirmasi: nama/alias, role, intro, skills, project, sertifikasi, link kontak
- Aset visual milik sendiri/berlisensi (mata, kupu-kupu, langit, avatar). Tanpa itu dipakai placeholder CSS
- File MP3 berlisensi
- (Opsional) HEX asli palet dari reference board, dan pilihan font display/pixel
