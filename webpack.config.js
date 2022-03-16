const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules|test/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'saslprep.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};
