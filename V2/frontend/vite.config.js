import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode);
  return {
    plugins: [react()],
    server: {
      proxy: {
        "/auth/": {
          target:
            mode === "development"
              ? "http://localhost:3000"
              : "https://conf-backend.onrender.com",
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
