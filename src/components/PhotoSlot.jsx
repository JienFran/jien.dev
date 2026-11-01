import { useEffect, useState } from "react";

const SLIDE_MS = 5000;

// Mengubah src (string atau array) menjadi daftar src yang valid
const toList = (src) => (Array.isArray(src) ? src : [src]).filter(Boolean);

// Slot foto. Jika src kosong, tampil kotak placeholder.
// - src array: foto berganti otomatis tiap 5 detik (dimatikan saat prefers-reduced-motion)
// - frame: bracket di sudut + label objek (photo.tag)
// - aboveCrt: foto tampil di atas filter CRT, tanpa scanline dan tint lokal
// - index: urutan animasi "lock" saat halaman dimuat
// - as: gunakan "span" jika slot berada di dalam <button>
export default function PhotoSlot({
  photo,
  className = "",
  small = false,
  frame = false,
  aboveCrt = false,
  index = 0,
  as: Tag = "div",
}) {
  const { src, alt = "", label = "photo", tag } = photo || {};
  const sources = toList(src);
  const [slide, setSlide] = useState(0);

  // Slideshow otomatis jika ada lebih dari satu foto
  useEffect(() => {
    if (sources.length < 2) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => setSlide((i) => (i + 1) % sources.length), SLIDE_MS);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sources.length]);

  // Isi: daftar gambar dengan transisi opacity, atau placeholder berlabel jika src kosong
  const inner =
    sources.length > 0 ? (
      <Tag className="photo relative w-full h-full overflow-hidden">
        {sources.map((s, idx) => (
          <img
            key={s}
            src={s}
            alt={alt}
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              idx === slide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </Tag>
    ) : (
      <Tag className={`photo photo--empty ${small ? "photo--sm" : ""}`} aria-hidden="true">
        <span className="photo__label">{label}</span>
      </Tag>
    );

  // Tanpa frame hanya dibungkus; dengan frame ditambah bracket dan label
  const wrapClass = `${className} ${aboveCrt ? "above-crt" : ""}`.trim();

  if (!frame) {
    return <Tag className={`photo-wrap ${wrapClass}`}>{inner}</Tag>;
  }

  return (
    <Tag className={`frame ${wrapClass}`} style={{ "--i": index }}>
      {inner}
      {tag && (
        <Tag className="frame__tag" aria-hidden="true">
          {tag}
        </Tag>
      )}
    </Tag>
  );
}