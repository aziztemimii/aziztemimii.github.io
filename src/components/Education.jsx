import { education } from "../data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <span className="section-label">04 · Education</span>
          <h2 className="section-title">
            My <span className="gradient-text">academic path</span>
          </h2>
        </Reveal>
        <div className="edu-grid">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 80}>
              <div className="card edu-card">
                <div>
                  <h3>{edu.degree}</h3>
                  <div className="school">{edu.school}</div>
                  {edu.details.length > 0 && (
                    <ul className="edu-details">
                      {edu.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="edu-right">
                  {edu.period}
                  <span className="loc">{edu.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
