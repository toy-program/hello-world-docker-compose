const logger = require('morgan');
const routers = require('../routers');
module.exports = app => {
  app.use(logger('dev'));

  app.use('/api', routers);
};
