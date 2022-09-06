import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  publicDir: process.env.NODE_ENV === 'development' ? 'public' : false,
  plugins: [vue()],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'epicSpinners',
      fileName: (format) => `lib.${format}.js`,
      formats: ['es', 'cjs', 'iife'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
