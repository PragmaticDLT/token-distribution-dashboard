const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const SRC_FOLDER = path.resolve(__dirname, 'src');

module.exports = {

  entry: './application.jsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_FOLDER,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            compact: true,
            presets: ['es2017', 'stage-0', 'react'],
            plugins: ['transform-decorators-legacy']
          }
        }
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: require.resolve('css-loader')
        })
      },

      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: {
          loader: require.resolve('file-loader'),
          options: {
            name: 'images/[name].[ext]'
          }
        }
      },

      // https://survivejs.com/webpack/loading/fonts/
      {
        test: /\.(otf|ttf|eot|woff|woff2)$/,
        use: {
          loader: require.resolve('file-loader'),
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      },
    ]
  },

  resolve: {
    modules: ['node_modules', SRC_FOLDER],
    extensions: ['*', '.js', '.jsx']
  },

  performance: {
    hints: false
  },

  devServer: {
    open: true,
    port: 7777,
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: true
  },

  context: SRC_FOLDER,

  target: 'web',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cockpit',
      template: 'html/index.ejs',
      filename: 'index.html',
      hash: true,
      inject: 'body'
    }),
    new ExtractTextPlugin('styles.css'),
  ]
};
