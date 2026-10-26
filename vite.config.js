import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Jika deploy ke GitHub Pages (https://user.github.io/nama-repo/),
// tambahkan: base: "/nama-repo/"
export default defineConfig({
  plugins: [react()],
});
