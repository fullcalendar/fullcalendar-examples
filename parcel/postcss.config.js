
// not working, probably due to:
// https://github.com/parcel-bundler/parcel/issues/329

module.exports = {
  plugins: [
    require('postcss-custom-properties')({ // for css vars
      preserve: false, // completely reduce all css vars
      importFrom: [
        'src/fullcalendar-vars.css'
      ]
    })
  ]
}
