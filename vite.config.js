import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html',
        simple: './simple.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  css: {
    devSourcemap: true
  }
})
