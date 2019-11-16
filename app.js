const loaders = require('./loaders');
const app = require('express')();

loaders(app).then(() => {
  app.listen(3000, () => {
    console.log('server is on 3000');
  });
});
