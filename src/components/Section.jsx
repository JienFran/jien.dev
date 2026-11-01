import PhotoSlot from "./PhotoSlot.jsx";
import { toCssSize } from "../utils/toCssSize.js";

// Pembungkus section: judul besar + foto ikon opsional di sampingnya.
// Ukuran ikon dibaca dari slot foto (`size` dan `aspect`); aboveCrt menampilkan ikon di atas filter CRT.
export default function Section({ id, title, photo, aboveCrt = false, children }) {
  const iconStyle = {};
  if (photo?.size) iconStyle["--icon-size"] = toCssSize(photo.size);
  if (photo?.aspect) iconStyle["--icon-aspect"] = photo.aspect;

  return (
    <section id={id} className="sec" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <div className="sec__head">
          <h2 id={`${id}-title`} className="sec__title">
            {title}
          </h2>
          {photo && (
            <span className="sec__icon-wrap" style={iconStyle}>
              <PhotoSlot photo={photo} frame small aboveCrt={aboveCrt} className="sec__icon" />
            </span>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
