import { profile, photos } from "../data/content.js";
import Calendar from "./Calendar.jsx";
import PhotoSlot from "./PhotoSlot.jsx";
import Section from "./Section.jsx";

// Section About: pernyataan besar + potret + info singkat di kiri, kalender di kanan.
export default function About() {
  const [lede, ...rest] = profile.about;

  return (
    <Section id="about" title="about me" photo={photos.aboutIcon}>
      <div className="about">
        <div className="panel">
          <p className="lede">{lede}</p>

          {rest.length > 0 && (
            <div className="about__more">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="about__meta">
            <PhotoSlot photo={photos.aboutPortrait} frame aboveCrt className="about__portrait" />
            {profile.meta.length > 0 && (
              <dl className="meta">
                {profile.meta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                    {item.info && <dd className="meta__info">{item.info}</dd>}
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>

        <div className="about__aside">
          <Calendar />
        </div>
      </div>
    </Section>
  );
}
