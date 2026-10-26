import { skillGroups } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <h2 id="skills-title" className="section-title">
        Skills
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="panel">
            <h3 className="label mb-3">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded border border-border bg-surface-raised px-2 py-1 text-sm text-text"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
