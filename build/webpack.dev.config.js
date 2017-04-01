import webpack from 'webpack';
import {resolve} from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const projectRoot = resolve(__dirname, '../');

export default {

  context: projectRoot,

  entry: [
    'webpack-hot-middleware/client',
    './src/client.jsx'
  ],

  output: {
    filename: 'fund.js',
    path: resolve(projectRoot, './dist'),
    publicPath: 'http://localhost:3000/'
  },

  devtool: 'eval-source-map',

  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.js?$/,
        exclude: [
          resolve(__dirname, 'node_modules'),
          resolve(__dirname, 'dist')
        ],
        use: [{ loader: 'eslint-loader' }]
      },
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        include: /\.json$/,
        loader: 'json'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('stylesheets/fund.compiled.css'),
    new webpack.DefinePlugin({
      'DEV': true
    }),
  ]
};
