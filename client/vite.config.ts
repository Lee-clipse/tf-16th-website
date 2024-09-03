import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy({
      targets: ['chrome >= 64', 'safari >= 12'],
    modernPolyfills: true
  })],
})
