import mongezVite from "@mongez/vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // needed to load SVG as components
    svgr(),
    // needed to manage .env file and link tsconfig paths aliases
    mongezVite(),
    react(),
    visualizer({
      template: "treemap", // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "bundle.analyze.html",
    }),
  ],
  envPrefix: "APP_",
});
