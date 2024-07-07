import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePluginRadar } from "vite-plugin-radar";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),
    tsconfigPaths(),
    VitePluginRadar({
      analytics: {
        id: "G-XHBFLKH3D1",
      },
    }),
  ],
  resolve: {
    alias: {
      "@src": "/src",
    },
  },
});
