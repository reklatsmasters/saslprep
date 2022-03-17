const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules|test/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    })
  ],
  resolve: {
    extensions: ['*', '.js'],
    fallback: {
      "buffer": require.resolve("buffer")
    }
  },
  output: {
    library: 'saslprep',
    path: path.resolve(__dirname, './dist'),
    filename: 'saslprep.js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};
