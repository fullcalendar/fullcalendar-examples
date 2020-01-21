
// not working, probably due to:
// https://github.com/parcel-bundler/parcel/issues/329

module.exports = {
  plugins: [
    require('postcss-css-variables')({
      variables: {
        '--fc-unthemed-border-color': 'red'
      }
    })
  ]
}
