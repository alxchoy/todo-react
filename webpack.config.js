const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /.\.(js|jsx)$/,
      use: 'babel-loader'
    }]
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}