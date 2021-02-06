const path = require('path');
const docsConfig = require('./webpack.docs')
const distConfig = require('./webpack.dist')

const base = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      }
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json', '.css'],
  },
  target: 'web',
}

const dist = {
  ...base,
  ...distConfig
}

const docs = {
  ...base,
  ...docsConfig,
}

module.exports = process.env.TYPE === 'build_docs' ? docs : [docs, dist]
