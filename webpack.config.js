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
    port: 4444,
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
      }, {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = config;
