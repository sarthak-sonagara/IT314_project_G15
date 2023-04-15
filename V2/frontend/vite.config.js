import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth/": {
        target:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://conf-backend.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
