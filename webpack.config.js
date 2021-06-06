const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ a: './main.js', b: './main2.js'})
      }, 3000)
    })
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          use: [ 'css-loader' ],
        })
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `main.css`,
    }),
  ],
  devServer: {
    https: true,
    open: true,
  },
}