const HtmlWebpackPlugin =  require('html-webpack-plugin');
module.exports = {
  entry: './src/javascript/main.js',
  plugins: [new HtmlWebpackPlugin ( {template: './src/index.html'})]
};
