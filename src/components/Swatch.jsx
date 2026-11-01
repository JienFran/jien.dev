// Strip palet warna dekoratif; warnanya diambil dari token CSS.
export default function Swatch({ className = "" }) {
  return (
    <div className={`swatch ${className}`} aria-hidden="true">
      <i style={{ background: "var(--color-lavender)" }} />
      <i style={{ background: "var(--color-border)" }} />
      <i style={{ background: "var(--color-bg)" }} />
      <i style={{ background: "var(--color-purple)" }} />
    </div>
  );
}
