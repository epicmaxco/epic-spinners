import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import consoleBuildInfo from "./src/vite-plugins/console-build-info";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      consoleBuildInfo(),
  ],
})
