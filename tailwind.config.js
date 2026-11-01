/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Warna merujuk ke CSS variable di src/index.css (plan.md §3)
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        raised: "var(--color-surface-raised)",
        indigo: "var(--color-indigo)",
        purple: "var(--color-purple)",
        "purple-bright": "var(--color-purple-bright)",
        lavender: "var(--color-lavender)",
        "lavender-pale": "var(--color-lavender-pale)",
        text: "var(--color-text)",
        muted: "var(--color-text-muted)",
        border: "var(--color-border)",
        periwinkle: "var(--color-periwinkle)",
        icon: "var(--color-icon)",
      },
    },
  },
  plugins: [],
};
