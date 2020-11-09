
module.exports = {

  presets: ['next/babel'], // default next.js presets

  // fullcalendar attempts to import its own CSS files, but next.js does not allow this.
  // throw away these statements before they arrive at next.js,
  // but you'll need to import them manually in pages/_app.jsx.
  // will also work for any other 3rd-party packages that attempt to do this.
  overrides: [{
    include: [
      './node_modules'
    ],
    plugins: [
      ['babel-plugin-transform-require-ignore', {
        extensions: ['.css']
      }]
    ]
  }]

}
