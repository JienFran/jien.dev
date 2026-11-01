import { photos } from "../data/content.js";
import AnalogClock from "./AnalogClock.jsx";
import PhotoSlot from "./PhotoSlot.jsx";
import Swatch from "./Swatch.jsx";

// Daftar foto kolase hero: `photo` = nama slot di `photos` (content.js), `slot` = kelas posisi `.c-<slot>` di index.css.
const HERO_ITEMS = [
  { photo: "heroMe", slot: "me" },
  { photo: "heroCyberpunk", slot: "cyberpunk" },
  { photo: "heroAlbums", slot: "albums" },
  { photo: "heroKimi", slot: "kimi" },
  { photo: "heroArt", slot: "art" },
  { photo: "heroDvd", slot: "dvd" },
  { photo: "heroMisc", slot: "misc" },
];

// Kolase foto di hero dengan jam analog dan palet warna sebagai pelengkap.
export default function Collage() {
  return (
    <div className="collage">
      {HERO_ITEMS.map(({ photo, slot }, i) => (
        <div key={photo} className={`c c-${slot}`}>
          <PhotoSlot photo={photos[photo]} frame index={i} />
        </div>
      ))}
      <div className="c c-clock">
        <AnalogClock />
      </div>
      <Swatch className="c c-swatch" />
    </div>
  );
}
