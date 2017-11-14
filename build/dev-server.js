const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('./webpack.config.js');
const open = require('open');

const compiler = webpack(webpackDevConfig);
new WebpackDevServer(compiler, {
  contentBase: './',
  historyApiFallback: true,
  hot: true,
  noInfo: false,
  publicPath: '/',
  stats: { colors: true }
}).listen(3001, 'localhost', () => {
  console.log('http://127.0.0.1:3001');
  console.log('Opening your system browser...');
  open('http://127.0.0.1:3001');
});

