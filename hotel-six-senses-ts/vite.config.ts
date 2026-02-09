import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js", // Donde sueles importar jest-dom
  },
  resolve: {
    alias: {
      "@": "/src", // para hacer un comando y poder linkear desde src y no pensar en ./ ../
    },
  },
});
