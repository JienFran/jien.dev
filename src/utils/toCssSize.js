// Mengubah ukuran dari content.js menjadi nilai CSS: angka = px, string dipakai apa adanya ("5rem", "120px").
export const toCssSize = (value) => (typeof value === "number" ? `${value}px` : value);
