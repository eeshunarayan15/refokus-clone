import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Tailwind plugin import karein

// https://vite.dev/config/
export default defineConfig({
  base: "/refokus-clone",
  plugins: [
    react(), // React plugin
    tailwindcss(), // Tailwind CSS plugin add karein
  ],
});
