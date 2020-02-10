const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
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
  devtool: 'sourcemap'
}
