const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-custom-properties')({ // for css vars
                preserve: false, // completely reduce all css vars
                importFrom: [
                  'src/fullcalendar-vars.css'
                ]
              })
            ]
          } }
        ]
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
}
