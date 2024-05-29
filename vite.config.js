import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue']
  },
  server: {
    proxy: {
      "/api": "http://127.0.0.1:3000",
      // '/m1': {
      //   target: 'http://127.0.0.1:4523',
      //   changeOrigin: true,
      //   rewrite: (path) => {
      //     console.log(path);
      //     return path
      //   },
      // '/m1': {
      //   target: 'http://127.0.0.1:4523',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy 是 'http-proxy' 的实例
      //     console.log('proxy', proxy);
      //     console.log('op', options);
      //   }
      // },
    }
  },
  }
)
