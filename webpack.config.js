const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/example.ts',
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: 'example.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'sourcemap'
}
