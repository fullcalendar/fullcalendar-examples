import vue from '@vitejs/plugin-vue'

module.exports = {
  root: './',
  base: './',
  build: {
    sourcemap: 'inline'
  },
  plugins: [
    vue()
  ],
}
