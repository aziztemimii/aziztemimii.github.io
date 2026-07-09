import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { profile } from "./data";

export default function App() {
  return (
    <>
      <div className="bg-grid" />
      <div className="bg-glow" />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer>
        <div className="container">
          © {new Date().getFullYear()} {profile.name} — Built with React ⚛
        </div>
      </footer>
    </>
  );
}
