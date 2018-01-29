const path = require('path')

module.exports = {
  entry: './src/example.ts',
  output: {
    filename: 'example.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'sourcemap',
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
}
