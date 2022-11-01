import vue from '@vitejs/plugin-vue'

export default {
  root: './',
  base: './',
  build: {
    sourcemap: 'inline'
  },
  plugins: [
    vue()
  ],
}
