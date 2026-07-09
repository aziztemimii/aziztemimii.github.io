import { skills } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <span className="section-label">01 · Skills</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">expertise</span>
          </h2>
        </Reveal>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <div className="card skill-card">
                <h3>
                  <span>{group.icon}</span> {group.category}
                </h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className={`tag ${i % 2 ? "cyan" : ""}`}>
                      {item}
                    </span>
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
