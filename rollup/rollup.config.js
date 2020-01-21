const nodeResolve = require('@rollup/plugin-node-resolve')
const postcss = require('rollup-plugin-postcss')

module.exports = {
  input: 'src/main.js',
  plugins: [
    nodeResolve(),
    postcss({
      extract: true // write to dist/main.css
    })
  ],
  output: {
    file: 'dist/main.js',
    format: 'iife'
  }
}
