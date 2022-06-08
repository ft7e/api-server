'use strict';
require('dotenv').config();
const server = require('./src/server');

const PORT = process.env.PORT || 3500;

const { db } = require('./src/models/index.model');

db.sync()
  .then(() => {
    server.start(PORT);
  })
  .catch(console.error);
