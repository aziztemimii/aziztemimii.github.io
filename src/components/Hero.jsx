import { useEffect, useRef, useState } from "react";
import { profile } from "../data";

export default function Hero() {
  const imgRef = useRef(null);
  const [photoOk, setPhotoOk] = useState(true);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setPhotoOk(false);
    }
  }, []);

  return (
    <header className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Available for PFE internship — 2027
          </div>
          <h1>
            Hi, I'm <span className="gradient-text">{profile.firstName}</span>.
            <br />
            {profile.title}
          </h1>
          <p className="tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work →
            </a>
            <a
              href={profile.cvFile}
              download="Mohamed-Aziz-Ben-Hassine-Temimi-CV.pdf"
              className="btn btn-ghost"
            >
              ⬇ Download CV
            </a>
          </div>
          <div className="hero-meta">
            <span>📍 {profile.location}</span>
            <span>{profile.openTo}</span>
          </div>
        </div>
        {profile.photo && photoOk && (
          <div className="hero-photo">
            <div className="photo-ring">
              <img
                ref={imgRef}
                src={profile.photo}
                alt={profile.name}
                onError={() => setPhotoOk(false)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
