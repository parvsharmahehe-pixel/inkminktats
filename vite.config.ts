import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    cssMinify: false,
  },
  plugins: [tailwindcss(), tanstackStart(), nitro(), react()],
});
