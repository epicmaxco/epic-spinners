import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import consoleBuildInfo from "./src/vite-plugins/console-build-info";
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      consoleBuildInfo(),
    viteStaticCopy({
      targets: [
        { src: path.resolve(__dirname, './static/*'), dest: path.resolve(__dirname, './dist/static') }
      ],
    })
  ],
})
