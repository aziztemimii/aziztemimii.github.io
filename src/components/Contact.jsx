import { useState } from "react";
import { profile } from "../data";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Fallback for older / non-secure contexts
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            <button
              type="button"
              onClick={copyEmail}
              className="btn btn-primary"
              aria-label={copied ? "Email copied to clipboard" : `Copy email ${profile.email}`}
            >
              <Icon name={copied ? "check" : "copy"} size={18} />
              {copied ? "Copied!" : profile.email}
            </button>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              <Icon name="mail" size={18} />
              Send email
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Icon name="linkedin" size={18} />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Icon name="github" size={18} />
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
