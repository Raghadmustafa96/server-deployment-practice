'use strict';

const express = require('express');
const app = express();
const notFoundRequest = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

app.get('/', (req, res) => {
  res.send('Hello From the Other side');
});

app.get('/data', (req, res) => {
  res.send('the server is visible');
});

app.get('/error', (req, res) => {
  throw new Error('ERROR FROM server side :) ...');
});

function start(port) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}


app.use('*', notFoundRequest);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};