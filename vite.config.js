import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      "chunk-CY2I7XHN.js", 
      "chunk-U3AB2TBO.js"
    ]
  },

  server: {
    host: '0.0.0.0', // Allows access from any device on the network
    port: 5173, // Optional, change port if needed
  }

})

