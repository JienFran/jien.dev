// Semua konten situs diedit di file ini (plan.md §11).
// Nilai bertanda TODO adalah placeholder: ganti dengan konten yang Anda konfirmasi.
// Cari semuanya dengan: grep -rn TODO src/
// Jangan isi dengan klaim, URL, atau metrik yang belum benar-benar ada.

export const profile = {
  name: "TODO: Nama / alias",
  role: "TODO: Role singkat (mis. Informatics Student)",
  intro: "TODO: Satu kalimat perkenalan singkat.",
  about: "TODO: Satu paragraf tentang Anda dan minat Anda. Tulis hanya yang benar.",
  // Metadata opsional (hapus yang tidak ingin ditampilkan)
  meta: [
    { label: "Education", value: "TODO" },
    { label: "Focus", value: "TODO" },
  ],
  // Path relatif ke public/, mis. "/images/avatar.jpg". Kosongkan untuk placeholder.
  avatar: "",
};

// { title: string, skills: string[] }
// Tanpa persentase/level kecuali Anda yang menentukan nilainya (plan.md §5.4).
export const skillGroups = [
  { title: "TODO: Grup 1 (mis. Languages)", skills: ["TODO"] },
  { title: "TODO: Grup 2 (mis. Frontend / Backend)", skills: ["TODO"] },
  { title: "TODO: Grup 3 (mis. Tools)", skills: ["TODO"] },
];

// { title, summary, role?, technologies[], image?, repositoryUrl?, demoUrl?, status? }
// Field opsional yang kosong tidak ditampilkan.
export const projects = [
  {
    title: "TODO: Nama project 1",
    summary: "TODO: Ringkasan satu kalimat.",
    role: "",
    technologies: ["TODO"],
    image: "",
    repositoryUrl: "",
    demoUrl: "",
    status: "",
  },
];

// { title, issuer, year, url? } — urutkan dari yang terbaru
export const certifications = [
  {
    title: "TODO: Nama sertifikat / kompetisi",
    issuer: "TODO: Penyelenggara",
    year: "TODO",
    url: "",
  },
];

// { label, url } — hanya tautan yang Anda setujui untuk dipublikasikan
export const socialLinks = [
  // { label: "GitHub", url: "https://github.com/username" },
  // { label: "Email", url: "mailto:nama@contoh.com" },
];

// { title, artist, src } — src relatif ke public/, mis. "/audio/lagu.mp3"
// Gunakan hanya musik yang Anda berhak pakai. Kosong = pemutar menampilkan pesan.
export const playlist = [
  // { title: "Judul", artist: "Artis", src: "/audio/lagu.mp3" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
