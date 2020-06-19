const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'sourcemap',
  entry: './src/main.js',
  resolve: {
    extensions: [ '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1 } }
        ]
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new MomentLocalesPlugin(), // strip all locales except 'en'
    new MomentTimezoneDataPlugin({
      matchZones: [ 'Europe/Madrid' ] // strip all zones except this one. used in the demo
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
}
