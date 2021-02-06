const express = require('express');

const path = require('path');

const app = express();
const webpack = require('webpack');

let config;
if (process.env.NODE_ENV === 'development') {
  console.log('development mode');
  config = require('./webpack/webpack.config.dev.js');
} else {
  console.log('production mode');
  config = require('./webpack/webpack.config.prod.js');
}
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

if (process.env.NODE_ENV === 'development') {
  app.use('/static', express.static(path.resolve(__dirname, 'src', 'static')));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
  });
} else {
  app.use('/static', express.static(path.resolve(__dirname, 'dist', 'static')));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(process.env.PORT || 5080, () => {
  console.log('Server is running at http://localhost:5080/');
});
