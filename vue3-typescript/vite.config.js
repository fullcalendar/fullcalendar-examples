import vue from '@vitejs/plugin-vue'

export default {
  base: './', // for dist files referencing themselves
  build: {
    sourcemap: 'inline'
  },
  plugins: [
    vue()
  ],
}
