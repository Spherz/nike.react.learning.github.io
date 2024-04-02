import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Spherz/nike.react.learning.github.io.git",
  plugins: [react()],
  server: {
    host: true,
  },
})
