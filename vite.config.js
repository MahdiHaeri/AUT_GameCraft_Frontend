import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/aut-gamecraft-2024-frontend/",
  plugins: [react()],
})
