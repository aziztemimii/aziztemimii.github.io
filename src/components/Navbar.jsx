export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="nav-logo">
          aziz<span>.temimi</span>
        </a>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
