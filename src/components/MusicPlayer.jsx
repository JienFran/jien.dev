import { useEffect, useRef, useState } from "react";
import { playlist, photos } from "../data/content.js";
import PhotoSlot from "./PhotoSlot.jsx";

// Jumlah batang animasi gelombang saat lagu diputar
const WAVE_BARS = 9;

// Detik → "m:ss"
const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
};

// Pembungkus ikon SVG kecil
function Icon({ size = 16, children }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

// Pemutar musik dari file lokal (autoplay saat dimuat).
// Cover berfungsi sebagai tombol putar/jeda; slider menunjukkan dan mengatur posisi lagu.
export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const track = playlist[index];
  const hasAudio = Boolean(track?.src);
  const multiple = playlist.length > 1;

  // Coba putar otomatis saat komponen pertama kali dimuat atau lagu berganti
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && hasAudio) {
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Pindah ke lagu sebelumnya (-1) atau berikutnya (+1), berputar di ujung daftar
  const step = (direction) => {
    setIndex((i) => (i + direction + playlist.length) % playlist.length);
    setTime(0);
    setDuration(0);
  };

  // Putar / jeda
  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => setPlaying(false));
    else audio.pause();
  };

  // Geser posisi lagu
  const seek = (event) => {
    const value = Number(event.target.value);
    if (audioRef.current) audioRef.current.currentTime = value;
    setTime(value);
  };

  // Cover lagu sendiri jika ada, jika tidak memakai cover bawaan
  const cover = track?.cover ? { src: track.cover, alt: "" } : photos.musicCover;

  return (
    <div className={`player ${playing ? "is-playing" : ""}`} role="group" aria-label="Music player">
      {hasAudio && (
        <audio
          key={track.src}
          ref={audioRef}
          src={track.src}
          preload="auto"
          volume={0.5}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => {
            setDuration(e.currentTarget.duration);
            e.currentTarget.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
          }}
          onEnded={() => {
            if (multiple) {
              setPlaying(true);
              step(1);
            }
          }}
        />
      )}

      <button
        type="button"
        className="player__cover"
        onClick={toggle}
        disabled={!hasAudio}
        aria-label={playing ? "Pause" : "Play"}
      >
        <PhotoSlot as="span" photo={cover} className="player__img" small />
        {/* Ikon ▶ saat jeda (selalu terlihat); ikon ⏸ saat memutar (hanya saat hover/fokus) */}
        <span className="player__glyph" aria-hidden="true">
          <Icon size={26}>{playing ? <path d="M6 4h4.5v16H6zM13.5 4H18v16h-4.5z" /> : <path d="M7 4v16l13-8z" />}</Icon>
        </span>
      </button>

      <div className="player__top">
        <p className="player__title" aria-live="polite">
          {track ? `${track.title} - ${track.artist}` : "No track"}
        </p>

        {hasAudio ? (
          <span className="wave" aria-hidden="true">
            {Array.from({ length: WAVE_BARS }, (_, i) => (
              <i key={i} />
            ))}
          </span>
        ) : (
          <span className="player__hint">audio file not added yet</span>
        )}

        {multiple && (
          <span className="player__skip">
            <button type="button" onClick={() => step(-1)} aria-label="Previous track">
              <Icon>
                <path d="M6 5h2v14H6zM20 5v14L9.5 12z" />
              </Icon>
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next track">
              <Icon>
                <path d="M16 5h2v14h-2zM4 5v14l10.5-7z" />
              </Icon>
            </button>
          </span>
        )}
      </div>

      <div className="player__bar">
        <input
          className="player__seek"
          type="range"
          min="0"
          max={duration || 0}
          step="1"
          value={Math.min(time, duration || 0)}
          onChange={seek}
          disabled={!hasAudio}
          aria-label="Track position"
          aria-valuetext={`${formatTime(time)} of ${formatTime(duration)}`}
        />
        <span className="player__time">
          {formatTime(time)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  );
}