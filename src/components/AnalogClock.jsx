import { useNow } from "../hooks/useNow.js";

// Sudut penanda di posisi 12, 3, 6, dan 9 (jam tanpa angka)
const QUARTERS = [0, 90, 180, 270];

const timeFmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" });

// Jam analog yang mengikuti waktu perangkat.
export default function AnalogClock({ className = "" }) {
  const now = useNow();

  // Sudut jarum dihitung halus: menit ikut detik, jam ikut menit
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  return (
    <svg
      className={`clock ${className}`}
      viewBox="0 0 200 200"
      role="img"
      aria-label={`Analog clock, ${timeFmt.format(now)}`}
    >
      <circle className="clock__face" cx="100" cy="100" r="97" />

      <g transform="translate(100 100)">
        {QUARTERS.map((angle) => (
          <line key={angle} className="clock__tick" x1="0" y1="-84" x2="0" y2="-90" transform={`rotate(${angle})`} />
        ))}

        <line className="clock__hand clock__hand--hour" x1="0" y1="0" x2="0" y2="-58" transform={`rotate(${hours * 30})`} />
        <line className="clock__hand clock__hand--minute" x1="0" y1="0" x2="0" y2="-74" transform={`rotate(${minutes * 6})`} />
        <line className="clock__hand clock__hand--second" x1="0" y1="14" x2="0" y2="-80" transform={`rotate(${seconds * 6})`} />
        <circle className="clock__pin" cx="0" cy="0" r="4" />
      </g>
    </svg>
  );
}
