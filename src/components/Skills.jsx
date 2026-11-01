import { photos, skillGroups } from "../data/content.js";
import Section from "./Section.jsx";

// Satu skill: teks saja, atau objek { name, logo } untuk logo + teks.
function Chip({ skill }) {
  const { name, logo } = typeof skill === "string" ? { name: skill, logo: "" } : skill;
  return (
    <li className={`chip ${logo ? "chip--logo" : ""}`}>
      {logo && <img className="logo" src={logo} alt="" loading="lazy" decoding="async" />}
      <span>{name}</span>
    </li>
  );
}

// Section Skills, dikelompokkan per kategori.
export default function Skills() {
  return (
    <Section id="skills" title="skills" photo={photos.skillsIcon}>
      <ul className="skillrows">
        {skillGroups.map((group, i) => (
          <li key={group.title || i}>
            <h3>{group.title}</h3>
            <ul className="chips">
              {group.skills.map((skill, j) => (
                <Chip key={`${typeof skill === "string" ? skill : skill.name}-${j}`} skill={skill} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
