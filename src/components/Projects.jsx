import { projects } from "../data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <span className="section-label">03 · Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">built</span>
          </h2>
        </Reveal>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className={`card project-card ${p.featured ? "featured" : ""}`}>
                <span className="period">{p.period}</span>
                <h3>{p.title}</h3>
                <div className="subtitle">{p.subtitle}</div>
                <p className="desc">{p.description}</p>
                <div className="tag-list">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                {(p.github || p.demo) && (
                  <div className="project-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        → GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        → Live demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
