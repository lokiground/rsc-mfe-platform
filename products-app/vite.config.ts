// products-app/vite.config.ts
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "ProductsApp",
      fileName: (format) => `products-app.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  server: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/javascript",
    },
    cors: true,
  },
});
