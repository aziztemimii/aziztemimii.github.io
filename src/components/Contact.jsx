import { profile } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <Reveal>
          <span className="section-label">05 · Contact</span>
          <div className="big">
            Let's build something <span className="gradient-text">together</span>
          </div>
          <p>
            I'm currently looking for a final-year internship (PFE) abroad in
            Data Science / AI. If you think I'd be a good fit for your team,
            let's talk!
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              ✉ {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              GitHub
            </a>
          </div>
          <div className="languages-row">
            {profile.languages.map((l) => (
              <span key={l.name}>
                <b>{l.name}</b> · {l.level}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
