import mongezVite from "@mongez/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    // needed to load SVG as components
    svgr(),
    // needed to manage .env file and link tsconfig paths aliases
    mongezVite(),
    react(),
  ],
  envPrefix: "APP_",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
