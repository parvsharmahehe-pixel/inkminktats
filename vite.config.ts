import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  build: {
    cssMinify: false,
  },
  plugins: [tanstackStart(), react(), netlify()],
});
