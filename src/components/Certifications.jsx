import { certifications } from "../data/content.js";

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="section">
      <h2 id="certifications-title" className="section-title">
        Certifications &amp; Competitions
      </h2>
      <ol className="space-y-3">
        {certifications.map((cert) => (
          <li key={`${cert.title}-${cert.year}`} className="panel flex gap-4">
            <span className="label w-16 shrink-0 pt-1">{cert.year}</span>
            <div>
              <h3 className="font-semibold text-lavender">{cert.title}</h3>
              <p className="text-sm text-muted">{cert.issuer}</p>
              {cert.url && (
                <a href={cert.url} className="text-sm text-purple-bright underline">
                  Lihat bukti
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
