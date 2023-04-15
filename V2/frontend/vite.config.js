import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
console.log(process.env.NODE_ENV);
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth/": {
        target: process.env.NODE_ENV
          ? "http://localhost:3000"
          : "https://conf-backend.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
