import {join} from 'path';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.dev.config';

export default app => {
  const webpackCompiler = webpack(webpackConfig);
  app.use(devMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  }));
  app.use(hotMiddleware(webpackCompiler));
};