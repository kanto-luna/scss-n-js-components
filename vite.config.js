import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base: '/scss-n-js-components/',
  plugins: [solid()],
  resolve: {
    alias: {
      '/assets': '/src/assets',
      '/variables.scss': '/src/variables.scss',
    },
  },
})
