import { profile, socialLinks } from "../data/content.js";

export default function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="section border-t border-border">
      <h2 id="contact-title" className="section-title">
        Contact
      </h2>

      {socialLinks.length > 0 ? (
        <ul className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                className="inline-block rounded border border-border px-4 py-2 text-sm hover:border-purple-bright"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">TODO: tambahkan tautan kontak di socialLinks (src/data/content.js).</p>
      )}

      <p className="mt-10 text-xs text-muted">
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
