import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//@路径匹配
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
