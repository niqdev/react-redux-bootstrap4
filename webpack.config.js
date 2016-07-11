const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app-[hash].min.js'
  },
  plugins: [
    /**
     * PRODUCTION
     */
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    /**
     * COMMON
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      title: 'react-bootstrap4-ghpages',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'public/favicon.ico')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

module.exports = config
