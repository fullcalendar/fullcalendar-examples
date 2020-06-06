const nodeResolve = require('@rollup/plugin-node-resolve')
const postcss = require('rollup-plugin-postcss')
const postcssCustomProperties = require('postcss-custom-properties')

module.exports = {
  input: 'src/main.js',
  plugins: [
    nodeResolve(),
    postcss({
      /*
      for writing CSS to a separate file (dist/main.css).
      in rollup v2, this writes CSS rules in wrong order (https://github.com/egoist/rollup-plugin-postcss/issues/96)
      so, disable for now, and allow the CSS to be embedded in the JS
      */
      // extract: true,
      plugins: [
        postcssCustomProperties({ // for css vars
          preserve: false, // completely reduce all css vars
          importFrom: [
            'src/fullcalendar-vars.css'
          ]
        })
      ]
    })
  ],
  output: {
    file: 'dist/main.js',
    format: 'iife'
  }
}
