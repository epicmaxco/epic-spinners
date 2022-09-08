import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// config only for dev mode
export default defineConfig({
  plugins: [vue()],
})
