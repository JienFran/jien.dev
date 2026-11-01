import { profile } from "../data/content.js";
import Collage from "./Collage.jsx";

// Bagian pembuka: nama sebagai judul besar, peran, tombol, dan kolase foto.
export default function Hero() {
  // Tiap kata nama tampil di barisnya sendiri
  const words = profile.name.trim().split(/\s+/);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <h1 id="hero-title" className="hero__title">
            {words.map((word, i) => (
              <span key={`${word}-${i}`} className="hero__line">
                <span style={{ "--i": i }}>{word}</span>
              </span>
            ))}
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#projects">
              My Projects
            </a>
            <a className="btn btn--line" href="#contact">
              Social Links
            </a>
          </div>
        </div>

        <Collage />
      </div>
    </section>
  );
}
