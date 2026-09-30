import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
// Vercel automatically sets process.env.VERCEL = '1'
const basePath = process.env.VERCEL ? '/' : (process.env.BASE_PATH || '/Hillbound-Vaishu/')

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000,
    host: true
  }
})
