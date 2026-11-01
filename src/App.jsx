import Background from "./components/Background.jsx";
import CrtOverlay from "./components/CrtOverlay.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";

// Susunan halaman tunggal: hero → about → skills → projects → accomplishments → contact.
// Background dan CrtOverlay adalah lapisan dekoratif; MusicPlayer melayang di bawah layar.
export default function App() {
  return (
    <div className="page">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Background />
      <CrtOverlay />
      <Nav />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
      </main>

      <Contact />
      <MusicPlayer />
    </div>
  );
}
