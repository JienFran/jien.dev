// Lebar bar dan spasi secara bergantian (bar, spasi, bar, ...).
const BASE = [
  2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 2, 1, 1, 4, 2, 1, 3, 1, 2, 2, 1, 3, 1, 4, 1, 2, 1, 1, 3, 2, 1, 2, 4, 1, 1, 3, 2, 1,
  2, 3, 1, 2, 1, 4, 2,
];
// Pola diperpanjang dengan versi terbalik agar tampak acak seperti barcode sungguhan
const PATTERN = [...BASE, ...[...BASE].reverse(), ...BASE.slice(10)];

// Barcode dekoratif di bagian bawah Contact.
export default function Barcode() {
  // Hanya indeks genap yang digambar sebagai bar; indeks ganjil menjadi spasi
  let x = 0;
  const bars = [];
  PATTERN.forEach((width, i) => {
    if (i % 2 === 0) bars.push(<rect key={i} x={x} y="0" width={width} height="32" />);
    x += width;
  });

  return (
    <svg
      className="barcode"
      viewBox={`0 0 ${x} 32`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {bars}
    </svg>
  );
}
