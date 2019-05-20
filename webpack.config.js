var path = require('path');
 
module.exports = {
  entry: './javascript/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
