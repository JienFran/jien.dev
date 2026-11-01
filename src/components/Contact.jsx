import Barcode from "./Barcode.jsx";
import SocialLinks from "./SocialLinks.jsx";

// Section Contact di akhir halaman: judul outline, tombol sosial, dan baris hak cipta.
export default function Contact() {
  return (
    <footer id="contact" className="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title" className="contact__title">
          Social Links
        </h2>
        <p className="contact__lead">The heart is strengthened through bonds.</p>
        <SocialLinks />

        <div className="contact__base">
          <Barcode />
          <p>Francent Jienarta © {new Date().getFullYear()} · <a href="#top">Back to top</a></p>
        </div>
      </div>
    </footer>
  );
}
