import { photos } from "../data/content.js";

// Latar halaman: dasar hitam dengan cahaya violet.
// Memakai gambar dari photos.background; jika kosong, diganti siluet gedung buatan CSS.
export default function Background() {
  const { src } = photos.background;

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__glow" />
      {src ? (
        <div className="bg__image" style={{ backgroundImage: `url(${src})` }} />
      ) : (
        <>
          <div className="bg__towers bg__towers--a" />
          <div className="bg__towers bg__towers--b" />
          <div className="bg__towers bg__towers--c" />
        </>
      )}
      <div className="bg__haze" />
    </div>
  );
}
