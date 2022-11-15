
module.exports = {
  module: {
    rules: [
      {
        test: /@fullcalendar[\\/].*\.css$/,
        use: ['null-loader'],
      }
    ]
  }
}
