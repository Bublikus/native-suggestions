const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src', // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'dist'), // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'index.js', // string (default)
    // the filename template for entry chunks
    publicPath: '/', // string
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        // Conditions:
        test: /\.js$/,
        exclude: /node_modules/,
        // Actions:
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
            plugins: [
              [
                "@babel/plugin-proposal-class-properties",
                {
                  "loose": true
                }
              ]
            ],
          }
        }
      },
    ],
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving of loaders)
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    // directories where to look for modules (in order)
    extensions: ['.js', '.json', '.css'],
    // extensions that are used
    alias: {
      // a list of module name aliases
      // aliases are imported relative to the current context
      // alias 'only-module' -> 'new-module', but not 'only-module/path/file' -> 'new-module/path/file'
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ],
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
  target: 'web', // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior, available external modules
  // and generated code style
  
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  },
}
