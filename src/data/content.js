// Seluruh konten situs. Komponen hanya membaca data dari file ini.

// Identitas utama: dipakai di hero, navigasi, dan section About.
export const profile = {
  name: "Francent Jienarta",
  role: "Full Stack Developer",
  intro: "Full-Stack Development and Software Automation Enthusiast",
  // Paragraf pertama tampil sebagai pernyataan besar, sisanya sebagai teks biasa
  about: [
    "Third-year Informatics student at Universitas Multimedia Nusantara with passion and hands-on experience in Full-Stack Development and Software Automation.",
  ],
  // Baris ringkas di bawah paragraf About
  meta: [
    { label: "Education", value: "Studying Informatics at Universitas Multimedia Nusantara", info: "GPA: 3.88/4.00" },
    { label: "Next", value: "Currently looking for internship opportunities!" },
  ],
};

// Semua foto situs. Setiap slot: { src, alt, tag, size, aspect }.
// src boleh array (foto berganti otomatis); tag = label yang muncul di bracket saat hover.
// size = lebar ikon (angka = px, atau string CSS); aspect = rasio lebar / tinggi.
export const photos = {
  // Latar halaman
  background: { src: "images/background1.jpg" },

  // Kolase hero (urutan sama dengan HERO_ITEMS di Collage.jsx)
  heroMe: { src: "images/me.png", tag: "saya" },
  heroCyberpunk: { src: "images/cyberpunk.jpg", tag: "i love cyberpunk" },
  heroAlbums: {
    src: [
      "images/albums/albums1.jpg",
      "images/albums/albums2.jpg",
      "images/albums/albums3.jpg",
      "images/albums/albums4.jpg",
      "images/albums/albums5.jpg",
      "images/albums/albums6.jpg",
      "images/albums/albums7.jpg",
      "images/albums/albums8.jpg",
      "images/albums/albums9.jpg",
      "images/albums/albums10.jpg",
    ],
    tag: "music i'm listening to",
  },
  heroKimi: { src: "images/キミの記憶.jpg", tag: "キミの記憶" },
  heroArt: { src: "images/butterfly2.png", tag: "art i made" },
  heroDvd: { src: "images/dvd.jpg" },
  heroMisc: { src: "images/misc.jpg" },

  // Ikon di samping judul tiap section
  aboutIcon: { src: "images/cat.jpg", size: "5rem" },
  skillsIcon: { src: "images/skills/skills.png", size: 150, aspect: "3 / 4" },
  accomplishmentsIcon: { src: "images/accomplishments/remind.png", size: 300, aspect: "6 / 2" },

  // Potret kecil di section About
  aboutPortrait: { src: "images/portrait.jpeg" },

  // Cover pemutar musik
  musicCover: { src: "images/albums/albums1.jpg" },
};

// Skill per kategori. Tiap skill berupa teks, atau objek { name, logo } untuk menampilkan logo.
export const skillGroups = [
  { title: "languages", skills: ["Python", "JavaScript", "Kotlin", "C"] },
  { title: "frontend", skills: ["React.js", "HTML/CSS", "Tailwind CSS", "Bootstrap"] },
  { title: "backend", skills: ["Node.js", "Express.js", "REST APIs", "Axios", "JWT"] },
  { title: "database", skills: ["Firebase Firestore", "MySQL", "MongoDB"] },
  { title: "automation", skills: ["Playwright", "OpenCV", "EasyOCR", "Google Cloud API"] },
];

// Daftar proyek, tampil berselang-seling kiri/kanan. Field kosong tidak ditampilkan.
export const projects = [
  {
    title: "Ivy",
    summary:
      "A Python-based CLI automation tool that streamlines Instagram paid promotion. It automates requirements validation, violation tracking, payments records and report generation, reducing manual verification time from 20-30 minutes to under 5 minutes.",
    role: "",
    technologies: ["Python", "Playwright", "OpenCV", "EasyOCR", "Google Cloud API"],
    image: "images/projects/ivy2.png",
    repositoryUrl: "https://github.com/JienFran/ivy_paid_promote_checker",
    demoUrl: "",
    status: "Used for UMNFestival2026",
  },
  {
    title: "GamesVault",
    summary:
      "Co-founded an independent handheld gaming showroom business and developed its web platform for product showcasing and management.",
    role: "",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Firebase Firestore",
      "JWT",
      "Three.js",
      "Tailwind CSS",
    ],
    image: "images/projects/gamesvault.png",
    repositoryUrl: "https://github.com/butterscotchh/gamesvault-web",
    demoUrl: "https://gamesvault.vercel.app/",
    status: "Live",
  },
];

// Capaian / sertifikat, diurutkan dari yang terbaru (section Accomplishments).
// logo / logoSize = logo penyelenggara dan ukurannya.
// description = paragraf deskripsi (opsional).
// links = tombol tautan, boleh banyak: { label, url, variant }.
//   variant "solid" = tombol berisi warna; selain itu tombol bergaris. url kosong = tombol tidak ditampilkan.
//   Contoh: links: [{ label: "Github", url: "https://github.com/...", variant: "solid" }, { label: "Certificate", url: "https://..." }]
// images = gambar capaian, tiap gambar: { src, alt, label, size, aspect }.
//   size   = lebar gambar (angka = px, atau string CSS seperti "12rem"); bawaan 9.5rem.
//   aspect = rasio lebar / tinggi (mis. "4 / 3", "1 / 1", "3 / 4"); bawaan "4 / 3".
export const certifications = [
  {
    title: "Garudahacks 7.0",
    issuer: "Garuda Hacktahon",
    year: "2026",
    logo: "images/accomplishments/garudahacks.png",
    url: "",
    description: "Jalur Langit is a platform I co-built with two teammates during GarudaHacks 7.0 to help medical students in Indonesia discover clinical clekship and internship opportunities.",
    links: [{label: "Github", url: "https://github.com/Yunfaii/DoaIbu"}, {label: "Devpost", url: "https://devpost.com/software/jalur-langit"}],
    images: [
      { src: "images/accomplishments/Garuda Hacks 7.0 Certificate - Francent Francent.jpg", alt: "", label: "Certificate", size: "32%", aspect: "4 / 3" },
      { src: "images/accomplishments/jalurlangit.png", alt: "", label: "Jalur Langit", size: "24%", aspect: "1 / 1" },
      { src: "images/accomplishments/doaibu.jpg", alt: "", label: "DoaIbu Team", size: "32%", aspect: "4 / 3" },
    ],
  },
  {
    title: "Web Development & Cybersecurity",
    issuer: "IBM SkillsBuild",
    year: "2026",
    logo: "images/accomplishments/certificates/IBM.png",
    url: "",
    description: "Completed learning programs covering web development fundamentals and foundational cybersecurity concepts and practices.",
    links: [],
    images: [
      { src: "images/accomplishments/certificates/IBMWeb.jpg", alt: "", label: "Web Development Certificate", size: "32%", aspect: "4 / 3" },
      { src: "images/accomplishments/certificates/IBMCyber.jpg", alt: "", label: "Cybersecurity Certificate", size: "32%", aspect: "4 / 3" },
    ],
  },
  {
    title: "SOLID Principles, Java Programming & Project Management",
    issuer: "Dicoding Indonesia",
    year: "2026",
    logo: "images/accomplishments/certificates/dicoding.png",
    url: "",
    description: "Completed courses covering SOLID principles for maintainable software design, Java programming fundamentals, and project management practices.",
    links: [],
    images: [
      { src: "images/accomplishments/certificates/SOLID.jpg", alt: "", label: "SOLID Principles Certificate", size: "32%", aspect: "4 / 3" },
      { src: "images/accomplishments/certificates/Java.jpg", alt: "", label: "Java Programming Certificate", size: "32%", aspect: "4 / 3" },
      { src: "images/accomplishments/certificates/Project Management.jpg", alt: "", label: "Project Management Certificate", size: "32%", aspect: "4 / 3" },
    ],
  },
  {
    title: "Artificial Intelligence V4.0 & openGauss V1.0 Database",
    issuer: "Huawei ICT Academy",
    year: "2025",
    logo: "images/accomplishments/certificates/huawei.png",
    url: "",
    description: "Completed courses covering Artificial Intelligence concepts and applications, as well as database fundamentals using Huawei's openGauss technology.",
    links: [],
    images: [
      { src: "images/accomplishments/certificates/HCIA-AI V4.0 Course.png", alt: "", label: "AI V4.0 Certificate", size: "32%", aspect: "3 / 4" },
      { src: "images/accomplishments/certificates/HCIA-openGauss V1.0 Course.png", alt: "", label: "openGauss V1.0 Certificate", size: "32%", aspect: "3 / 4" },
    ],
  },
  {
    title: "Google CTF 2025",
    issuer: "Google",
    year: "2025",
    logo: "images/accomplishments/ctf.png",
    url: "",
    description: "Participated in Google CTF 2025, exploring cybersecurity concepts through Capture The Flag challenges.",
    links: [],
    images: [],
  },
];

// Tombol di section Contact. Ikon bawaan tersedia untuk github, linkedin, whatsapp, email, instagram, x.
// logo (opsional) = file logo sendiri, mis. "images/social/github.svg"; jika diisi menggantikan ikon bawaan.
// url kosong = tombol tampil nonaktif.
export const socialLinks = [
  { id: "github", label: "Github", url: "https://github.com/JienFran", logo: "" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/francent-jienarta", logo: "" },
  { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/6281310790781", logo: "" },
  { id: "email", label: "Email", url: "mailto:francentjie@gmail.com", logo: "" },
  { id: "music", label: "Music", url: "https://music.youtube.com/playlist?list=PL7J4zJm_mz5etbI7YihYIkWiabI5onOTA&si=OEJ9NmzLTIQmFMnC", logo: "" }
];

// Daftar lagu pemutar musik. src relatif terhadap folder public/.
export const playlist = [
  { title: "Clouds", artist: "Pastel Ghost", src: "audio/Clouds.mp3" }
];

// Menu navigasi; urutannya mengikuti urutan section di halaman.
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Accomplishments", href: "#accomplishments" },
  { label: "Contact", href: "#contact" },
  { label: "Download CV", href: "documents/CV FullStack - Francent Jienarta 2026.pdf" },
];
