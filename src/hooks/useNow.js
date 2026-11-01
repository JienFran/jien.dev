import { useEffect, useState } from "react";

// Memotong waktu menjadi tanggal jam 00:00
const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

/** Waktu sekarang, diperbarui tiap pergantian detik. */
export function useNow() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let timer;
    const tick = () => {
      setNow(new Date());
      timer = setTimeout(tick, 1000 - (Date.now() % 1000) + 5);
    };
    timer = setTimeout(tick, 1000 - (Date.now() % 1000) + 5);

    // Sinkronkan ulang saat tab kembali terlihat
    const onVisible = () => {
      if (!document.hidden) setNow(new Date());
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return now;
}

/** Tanggal hari ini (jam 00:00); berganti otomatis saat lewat tengah malam. */
export function useToday() {
  const [today, setToday] = useState(() => startOfDay(new Date()));

  useEffect(() => {
    let timer;

    const refresh = () =>
      setToday((prev) => {
        const next = startOfDay(new Date());
        return next.getTime() === prev.getTime() ? prev : next;
      });

    // Jadwalkan pembaruan tepat sesudah tengah malam berikutnya
    const schedule = () => {
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
      timer = setTimeout(() => {
        refresh();
        schedule();
      }, midnight - now);
    };
    schedule();

    const onVisible = () => {
      if (!document.hidden) refresh();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return today;
}

/**
 * Mengembalikan id section yang sedang aktif, yaitu yang bagian atasnya
 * paling dekat di bawah garis 45% tinggi layar.
 */
export function useScrollSpy(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.45;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      // Di hero (sebelum section pertama) tidak ada menu yang aktif
      let current = "";
      let bestTop = -Infinity;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        // Di dasar halaman pilih section paling bawah; selain itu yang terdekat di bawah garis
        if (atBottom ? top > bestTop : top <= line && top > bestTop) {
          bestTop = top;
          current = id;
        }
      });
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|")]);

  return active;
}
