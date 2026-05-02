import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Buni qo'shasiz

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Va buni ham qo'shasiz
  ],
})