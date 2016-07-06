const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js'
  },
  devServer: {
    contentBase: './public'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-bootstrap4-ghpages',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'public/favicon.ico')
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
