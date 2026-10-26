import { projects } from "../data/content.js";

function ProjectCard({ project }) {
  const { title, summary, role, technologies, image, repositoryUrl, demoUrl, status } = project;

  return (
    <article className="panel flex flex-col gap-3 transition-colors hover:border-purple-bright focus-within:border-purple-bright">
      {image && <img src={image} alt={`Tampilan project ${title}`} className="w-full rounded" loading="lazy" />}

      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-lavender">{title}</h3>
        {status && <span className="label shrink-0">{status}</span>}
      </div>

      <p className="text-muted">{summary}</p>
      {role && (
        <p className="text-sm">
          <span className="label mr-2">Role</span>
          {role}
        </p>
      )}

      {technologies?.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech} className="rounded bg-surface-raised px-2 py-1 text-xs text-lavender-pale">
              {tech}
            </li>
          ))}
        </ul>
      )}

      {(repositoryUrl || demoUrl) && (
        <div className="mt-auto flex gap-4 pt-2 text-sm">
          {repositoryUrl && (
            <a href={repositoryUrl} className="text-purple-bright underline">
              Source code
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} className="text-purple-bright underline">
              Live demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <h2 id="projects-title" className="section-title">
        Projects
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
