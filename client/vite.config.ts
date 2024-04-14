import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const API_URL = process.env.API_URL || 'http://127.0.0.1:8000';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'static',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true,
      }
    }
  },
})
