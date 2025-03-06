import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true, // Ensures external access
    strictPort: true, // Ensures Vite uses the exact port
    allowedHosts: [
      "3001-rounak0003-chatapp-q67sknmh6uk.ws-us118.gitpod.io" // Explicitly allow your Gitpod URL
    ],
    proxy: {
      "/api": {
        target: "http://localhost:4002",
        changeOrigin: true,
      },
    },
  },
});
