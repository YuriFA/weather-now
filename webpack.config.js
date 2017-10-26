const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'eval-source-map',
  context: path.join(__dirname, '/src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'public'),
    port: 3333,
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = config;
