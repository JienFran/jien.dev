import { useEffect, useRef, useState } from "react";
import { playlist } from "../data/content.js";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [open, setOpen] = useState(false);

  const track = playlist[index];

  // Ganti sumber lagu; lanjut memutar hanya jika sebelumnya sedang diputar (bukan autoplay awal)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !track) return;
    audio.load();
    if (playing) audio.play().catch(() => setPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  const step = (dir) => setIndex((i) => (i + dir + playlist.length) % playlist.length);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) audio.muted = !muted;
    setMuted(!muted);
  };

  return (
    <aside
      aria-label="Pemutar musik"
      className="fixed bottom-3 right-3 z-40 max-w-[calc(100vw-1.5rem)] rounded border border-border bg-surface text-sm"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="music-panel"
        className="label w-full px-3 py-2 text-left"
      >
        Music {open ? "−" : "+"}
      </button>

      {open && (
        <div id="music-panel" className="space-y-2 border-t border-border p-3">
          {track ? (
            <>
              <audio
                ref={audioRef}
                src={track.src}
                onEnded={() => (playlist.length > 1 ? step(1) : setPlaying(false))}
                preload="none"
              />
              <p aria-live="polite">
                <span className="text-text">{track.title}</span>
                <span className="block text-xs text-muted">{track.artist}</span>
              </p>
              <div className="flex gap-2">
                <button type="button" onClick={() => step(-1)} aria-label="Lagu sebelumnya" className="rounded border border-border px-3 py-2">
                  ⏮
                </button>
                <button
                  type="button"
                  onClick={toggle}
                  aria-label={playing ? "Jeda" : "Putar"}
                  aria-pressed={playing}
                  className="rounded border border-border px-3 py-2"
                >
                  {playing ? "⏸" : "▶"}
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Lagu berikutnya" className="rounded border border-border px-3 py-2">
                  ⏭
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={muted ? "Aktifkan suara" : "Bisukan"}
                  aria-pressed={muted}
                  className="rounded border border-border px-3 py-2"
                >
                  {muted ? "🔇" : "🔊"}
                </button>
              </div>
            </>
          ) : (
            <p className="text-muted">
              Belum ada lagu. Taruh MP3 di public/audio/ lalu daftarkan di playlist (src/data/content.js).
            </p>
          )}
        </div>
      )}
    </aside>
  );
}
