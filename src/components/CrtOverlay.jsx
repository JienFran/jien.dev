// Efek CRT dua lapis yang tidak bisa diklik:
// - under: tekstur kuat (grain, mask RGB, scanline, pita bergulir) di bawah konten
// - over: scanline tipis dan vignette di atas konten, agar teks tetap terbaca
export default function CrtOverlay() {
  return (
    <>
      <div className="crt crt--under" aria-hidden="true">
        <div className="crt__layer crt__grain" />
        <div className="crt__layer crt__mask" />
        <div className="crt__layer crt__scan" />
        <div className="crt__layer crt__roll" />
      </div>
      <div className="crt crt--over" aria-hidden="true">
        <div className="crt__layer crt__scan" />
        <div className="crt__layer crt__vignette" />
      </div>
    </>
  );
}
