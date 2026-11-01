import { projects } from "../data/content.js";
import PhotoSlot from "./PhotoSlot.jsx";
import Section from "./Section.jsx";

// Satu proyek: gambar, judul, ringkasan, teknologi, dan tautan.
function ProjectEntry({ project }) {
  const { title, summary, role, technologies, image, repositoryUrl, demoUrl, status } = project;
  const media = { src: image, alt: image ? `Screenshot of ${title}` : "", label: "preview", tag: "project" };

  return (
    <li className="project">
      <PhotoSlot photo={media} frame className="project__media" />

      <div>
        <h3 className="project__title">
          {title}
          {status && <span className="project__status">{status}</span>}
        </h3>
        <p className="project__text">{summary}</p>
        {role && (
          <p className="project__role">
            <span>Role:</span> {role}
          </p>
        )}

        {technologies?.length > 0 && (
          <ul className="tags">
            {technologies.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        )}

        {(repositoryUrl || demoUrl) && (
          <p className="project__links">
            {repositoryUrl && (
              <a className="btn btn--line" href={repositoryUrl} target="_blank" rel="noreferrer noopener">
                Github
              </a>
            )}
            {demoUrl && (
              <a className="btn btn--solid" href={demoUrl} target="_blank" rel="noreferrer noopener">
                Live Web
              </a>
            )}
          </p>
        )}
      </div>
    </li>
  );
}

// Section Projects.
export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="projects">
        {projects.map((project) => (
          <ProjectEntry key={project.title} project={project} />
        ))}
      </ul>
    </Section>
  );
}
