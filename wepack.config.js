const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};



  