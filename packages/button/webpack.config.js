const path = require('path');

const config = {
  mode: 'production',
  entry: [
    './src/index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'button',
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
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
    '@emotion/core': '@emotion/core',
    '@emotion/styled': '@emotion/styled',
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
