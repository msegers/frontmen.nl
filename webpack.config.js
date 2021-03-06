const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map'
};
