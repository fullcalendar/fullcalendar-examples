const nodeResolve = require('@rollup/plugin-node-resolve')
const postcss = require('rollup-plugin-postcss')
const postcssVariables = require('postcss-css-variables')

module.exports = {
  input: 'src/main.js',
  plugins: [
    nodeResolve(),
    postcss({
      extract: true, // write to dist/main.css
      plugins: [
        postcssVariables({
          variables: {
            '--fc-unthemed-border-color': 'red'
          }
        })
      ]
    })
  ],
  output: {
    file: 'dist/main.js',
    format: 'iife'
  }
}
