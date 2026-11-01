import { certifications, photos } from "../data/content.js";
import PhotoSlot from "./PhotoSlot.jsx";
import Section from "./Section.jsx";
import { toCssSize } from "../utils/toCssSize.js";

// Satu gambar capaian. Ukurannya mengikuti `size` (lebar) dan `aspect` (rasio) dari content.js.
// Jika ada src, gambar bisa diklik untuk dibuka penuh di tab baru.
function Shot({ image }) {
  const photo = { ...image, tag: image.label || "image" };

  if (!image.src) {
    return <PhotoSlot photo={photo} frame aboveCrt className="award__img" />;
  }

  return (
    <a href={image.src} target="_blank" rel="noreferrer noopener" className="award__shot">
      <PhotoSlot photo={photo} frame aboveCrt className="award__img" />
      <span className="sr-only">Open image in new tab</span>
    </a>
  );
}

// Section "Accomplishments": tahun, logo + judul, penyelenggara, deskripsi, tombol tautan, dan deretan gambar.
// Semua foto (ikon section, logo, gambar) tampil di atas filter CRT.
export default function Certifications() {
  return (
    <Section id="accomplishments" title="accomplishments" photo={photos.accomplishmentsIcon} aboveCrt>
      <ol className="awards">
        {certifications.map((cert, i) => (
          <li key={`${cert.title}-${i}`} className="award panel">
            <span className="award__year">{cert.year}</span>

            <div className="award__main">
              <h3 className="award__title">
                {cert.logo && (
                  <img
                    className="logo logo--lg"
                    style={cert.logoSize ? { "--logo-size": toCssSize(cert.logoSize) } : undefined}
                    src={cert.logo}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <span>
                  {cert.url ? (
                    <a href={cert.url} target="_blank" rel="noreferrer noopener">
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </span>
              </h3>
              <p className="award__issuer">{cert.issuer}</p>

              {cert.description && <p className="award__desc">{cert.description}</p>}

              {/* Tombol tautan (GitHub, sertifikat, dsb.); entri tanpa url dilewati */}
              {cert.links?.some((link) => link.url) && (
                <p className="award__links">
                  {cert.links
                    .filter((link) => link.url)
                    .map((link, k) => (
                      <a
                        key={`${link.label}-${k}`}
                        className={`btn ${link.variant === "solid" ? "btn--solid" : "btn--line"}`}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {link.label}
                      </a>
                    ))}
                </p>
              )}
            </div>

            {cert.images?.length > 0 && (
              <ul className="award__imgs">
                {cert.images.map((image, j) => {
                  // Ukuran per gambar lewat CSS variable; kosong = memakai ukuran bawaan di index.css
                  const style = {};
                  if (image.size) style["--shot-size"] = toCssSize(image.size);
                  if (image.aspect) style["--shot-aspect"] = image.aspect;

                  return (
                    <li key={`${image.src}-${j}`} style={style}>
                      <Shot image={image} />
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
