import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/content.js";
import { useScrollSpy } from "../hooks/useNow.js";

// Id section yang dipantau, diambil dari href navLinks
const IDS = navLinks.map((link) => link.href.slice(1));

// Navigasi: menu vertikal tetap di kiri pada desktop, tombol "Menu" pada layar kecil.
// Menu aktif mengikuti posisi scroll.
export default function Nav() {
  const active = useScrollSpy(IDS);
  const [open, setOpen] = useState(false);

  // Tombol Escape menutup menu mobile
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <a href="#top" className="nav__brand">
        {profile.name}
      </a>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav id="site-menu" className={`nav__panel ${open ? "is-open" : ""}`} aria-label="Main">
        <p className="nav__cap" aria-hidden="true">
          Menu
        </p>
        <ul className="nav__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="nav__link"
                href={link.href}
                aria-current={active === link.href.slice(1) ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
