const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'public/main.js'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.js',
    publicPath: process.env.TYPE === 'build_docs' ? '/' : 'https://bublikus.github.io/native-suggestions/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html')
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
}
