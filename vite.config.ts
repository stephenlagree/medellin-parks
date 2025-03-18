import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/medellin-parks/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'mapbox-gl': ['mapbox-gl'],
        },
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (name === 'vite.svg') {
            return '[name].[ext]';
          }
          return 'assets/[name].[hash].[ext]';
        }
      },
    },
  },
})
