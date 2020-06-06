
module.exports = {
  plugins: [
    require('postcss-custom-properties')({
      preserve: false, // completely reduce all css vars
      importFrom: [
        'src/fullcalendar-vars.css'
      ]
    })
  ]
}
