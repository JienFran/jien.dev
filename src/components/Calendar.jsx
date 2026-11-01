import { useState } from "react";
import { useToday } from "../hooks/useNow.js";

// Pekan dimulai hari Minggu
const WEEKDAYS = [
  { short: "S", full: "Sunday" },
  { short: "M", full: "Monday" },
  { short: "T", full: "Tuesday" },
  { short: "W", full: "Wednesday" },
  { short: "T", full: "Thursday" },
  { short: "F", full: "Friday" },
  { short: "S", full: "Saturday" },
];

const monthFmt = new Intl.DateTimeFormat("en-US", { month: "long" });
const monthYearFmt = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" });

/** Menyusun satu bulan menjadi baris-baris pekan. Sel di luar bulan bernilai null. */
function buildWeeks(year, month) {
  const leading = new Date(year, month, 1).getDay(); // Minggu = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = Array(leading).fill(null);
  for (let d = 1; d <= daysInMonth; d += 1) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

function Chevron({ direction }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Kalender bulanan: hari ini ditandai, bulan bisa dipindah, dan hari diperbarui saat lewat tengah malam.
export default function Calendar() {
  const today = useToday();
  // Selisih bulan dari bulan berjalan (0 = bulan ini)
  const [offset, setOffset] = useState(0);

  const view = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  const year = view.getFullYear();
  const month = view.getMonth();
  const weeks = buildWeeks(year, month);
  const isCurrentMonth = offset === 0;

  // Tahun hanya ditampilkan saat melihat tahun lain
  const title = year === today.getFullYear() ? monthFmt.format(view) : monthYearFmt.format(view);

  return (
    <section className="cal" aria-label="Calendar">
      <header className="cal__head">
        <button type="button" className="cal__nav" onClick={() => setOffset((o) => o - 1)} aria-label="Previous month">
          <Chevron direction="left" />
        </button>

        <h2 className="cal__title" aria-live="polite">
          {title}
        </h2>

        <button type="button" className="cal__nav" onClick={() => setOffset((o) => o + 1)} aria-label="Next month">
          <Chevron direction="right" />
        </button>
      </header>

      <table className="cal__table">
        <caption className="sr-only">{monthYearFmt.format(view)}</caption>
        <thead>
          <tr>
            {WEEKDAYS.map((day) => (
              <th key={day.full} scope="col" abbr={day.full}>
                {day.short}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, row) => (
            <tr key={row}>
              {week.map((day, col) => {
                if (day === null) {
                  return (
                    <td key={col} aria-hidden="true">
                      <span className="cal__num cal__num--out" />
                    </td>
                  );
                }
                const isToday = isCurrentMonth && day === today.getDate();
                return (
                  <td key={col} aria-current={isToday ? "date" : undefined}>
                    <span className={isToday ? "cal__num cal__num--today" : "cal__num"}>
                      {day}
                      {isToday && <span className="sr-only"> (today)</span>}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {!isCurrentMonth && (
        <button type="button" className="cal__reset" onClick={() => setOffset(0)}>
          Back to today
        </button>
      )}
    </section>
  );
}
