'use strict';
require('dotenv').config();
const server = require('./server.js');
const port = process.env.PORT || 3030;
server.start(port);