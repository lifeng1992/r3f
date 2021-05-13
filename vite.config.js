import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@react-three/fiber': path.resolve(__dirname, 'libs/react-three-fiber.esm.js'),
    }
  },
})
