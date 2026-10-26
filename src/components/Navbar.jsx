import { profile, navLinks } from "../data/content.js";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 sm:px-6"
      >
        <a href="#top" className="label py-2">
          {profile.name}
        </a>
        <ul className="flex flex-wrap gap-x-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-block py-2 text-sm text-muted hover:text-lavender-pale"
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
