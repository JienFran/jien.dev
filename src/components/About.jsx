import { profile } from "../data/content.js";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <h2 id="about-title" className="section-title">
        About
      </h2>
      <div className="panel">
        <p className="max-w-prose text-text">{profile.about}</p>

        {profile.meta?.length > 0 && (
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {profile.meta.map((item) => (
              <div key={item.label}>
                <dt className="label">{item.label}</dt>
                <dd className="text-muted">{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
