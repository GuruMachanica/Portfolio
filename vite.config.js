import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three') || id.includes('maath'))
              return 'three-vendor';
            if (id.includes('framer-motion')) return 'framer-vendor';
            if (id.includes('react') || id.includes('react-dom')) return 'react-vendor';
            return 'vendor';
          }
        },
      },
    },
  },
})
