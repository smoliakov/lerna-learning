const path = require('path');

const config = {
  mode: 'production',
  entry: [
    './src/index.ts',
  ],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'utils',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
    ],
  },
};

module.exports = config;
