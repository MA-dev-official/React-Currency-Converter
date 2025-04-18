import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    allowedHosts: ['1b992f57-33d9-449f-aac3-0b792f92f129-00-34ys8b0olk1bm.sisko.replit.dev']
  },
})
