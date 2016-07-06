const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js'
  },
  plugins: [
    /**
     *
     */
    new webpack.HotModuleReplacementPlugin(),
    /**
     *
     */
    new HtmlWebpackPlugin({
      title: 'react-bootstrap4-ghpages',
      filename: 'index.html',
      template: 'index.template.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
