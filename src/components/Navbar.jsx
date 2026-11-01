import { navLinks } from "../data/content.js";
import { useScrollSpy } from "../hooks/useNow.js";

// Navbar horizontal lama; tidak dipakai di App.jsx.
const SECTION_IDS = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const active = useScrollSpy(SECTION_IDS);

  return (
    <header className="topnav">
      <nav aria-label="Main">
        <ul className="nav__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="nav__link"
                href={link.href}
                aria-current={active === link.href.slice(1) ? "location" : undefined}
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
