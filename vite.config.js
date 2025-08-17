import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ctflow/" // 👈 IMPORTANTE: aquí pones el nombre del repo
});
