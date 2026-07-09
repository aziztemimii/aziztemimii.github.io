import { experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <span className="section-label">02 · Experience</span>
          <h2 className="section-title">
            Where I've <span className="gradient-text">worked</span>
          </h2>
        </Reveal>
        <div className="timeline">
          {experience.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 100}>
              <div className="timeline-item">
                <span className="period">
                  {exp.period} · {exp.location}
                </span>
                <h3>{exp.role}</h3>
                <div className="company">{exp.company}</div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.93rem" }}>
                  {exp.description}
                </p>
                <ul>
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {exp.tags.map((t) => (
                    <span key={t} className="tag cyan">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
