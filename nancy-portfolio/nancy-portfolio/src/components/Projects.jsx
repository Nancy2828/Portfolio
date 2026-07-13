import { projects } from '../data/resumeData'
import { ArrowUpRight, Code2 } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="eyebrow">Projects</span>
        <h2 className="section-title reveal">Selected work.</h2>
        <p className="section-lead reveal">
          Two projects that show the range — a full-stack booking platform and a lightweight
          React data app.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card glass glass-card reveal" key={project.title}>
              <div className="project-card-icon">
                <Code2 size={20} />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="project-tags">
                {project.tech.map((tech) => (
                  <span className="project-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link cursor-hover">
                  View project <ArrowUpRight size={15} />
                </a>
              ) : (
                <span className="project-link project-link--muted">
                  Repository link coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
