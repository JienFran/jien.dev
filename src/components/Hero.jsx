import { profile, socialLinks } from "../data/content.js";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="section">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        {/* Panel profil */}
        <div className="panel">
          <p className="label mb-3">Profile</p>
          <h1 id="hero-title" className="text-4xl font-bold uppercase text-lavender">
            {profile.name}
          </h1>
          <p className="mt-2 text-lavender-pale">{profile.role}</p>
          <p className="mt-4 text-muted">{profile.intro}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded bg-purple px-4 py-2 text-sm font-semibold text-text hover:bg-purple-bright"
            >
              Lihat Projects
            </a>
            <a
              href="#contact"
              className="rounded border border-border px-4 py-2 text-sm hover:border-purple-bright"
            >
              Kontak
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="rounded border border-border px-4 py-2 text-sm hover:border-purple-bright"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Placeholder kolase / avatar — diganti pada fase tampilan */}
        <div
          role="img"
          aria-label="Placeholder visual hero"
          className="flex aspect-square w-full items-center justify-center border border-dashed border-border bg-surface-raised text-sm text-muted"
        >
          {profile.avatar ? (
            <img src={profile.avatar} alt="" className="h-full w-full object-cover" />
          ) : (
            "PLACEHOLDER: kolase hero"
          )}
        </div>
      </div>
    </section>
  );
}
