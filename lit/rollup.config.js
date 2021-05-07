const nodeResolve = require('@rollup/plugin-node-resolve')
const postcss = require('rollup-plugin-postcss')

module.exports = {
  input: 'src/main.js',
  plugins: [
    nodeResolve(),
    postcss({
      config: false, // don't attempt to load a postcss config
      extract: true,
    })
  ],
  output: {
    file: 'dist/main.js',
    format: 'iife'
  }
}
