const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    'example-es': './src/example-es.js',
    'example-all': './src/example-all.js',
    'example-some': './src/example-some.js',
  },
  resolve: {
    extensions: [ '.js' ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'sourcemap'
}
