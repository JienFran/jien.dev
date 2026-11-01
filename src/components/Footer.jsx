import { socialLinks } from "../data/content.js";
import MusicPlayer from "./MusicPlayer.jsx";

// Ikon sosial outline
const ICONS = {
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.3 12.9L3.5 20.5l4.2-1.1A8.5 8.5 0 1 0 12 3.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 8.3c.3-.4.7-.4 1-.2l.9 2c.1.3 0 .5-.3.8l-.4.5c.7 1.3 1.7 2.2 3 2.9l.6-.6c.3-.3.5-.3.8-.2l2 .9c.3.1.4.5.1.9-.5 1-1.5 1.5-2.6 1.2-2.9-.7-5.1-2.8-6-5.6-.2-1 .1-1.9.9-2.6z"
        fill="currentColor"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  ),
};

function SocialItem({ link }) {
  const icon = ICONS[link.id] ?? <span className="social__initial">{link.label.charAt(0)}</span>;
  const className = `social__item social__item--${link.id}`;

  if (!link.url) {
    // Tanpa url, ikon tampil nonaktif
    return (
      <span className={`${className} is-disabled`} role="img" aria-label={`${link.label} (tautan belum diisi)`}>
        {icon}
      </span>
    );
  }

  const external = /^https?:/.test(link.url);
  return (
    <a
      className={className}
      href={link.url}
      aria-label={link.label}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {icon}
    </a>
  );
}

// Dock footer lama (musik + sosial); tidak dipakai di App.jsx.
export default function Footer() {
  return (
    <footer id="contact" className="sect sect--dock" aria-label="Musik dan kontak">
      <MusicPlayer />

      <nav aria-label="Media sosial">
        <ul className="social">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <SocialItem link={link} />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
