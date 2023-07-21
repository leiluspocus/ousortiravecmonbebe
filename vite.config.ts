import { fileURLToPath, URL } from 'node:url'

import { VitePluginRadar } from 'vite-plugin-radar'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-EC8BT3E4FT'
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
