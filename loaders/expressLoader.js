const logger = require('morgan');
const routers = require('../routers');
const express = require('express');

module.exports = app => {
  app.use(logger('dev'));

  app.use(express.urlencoded({extended: true}));
  app.use(express.json());

  app.use('/api', routers);
};
