const expressLoader = require("./expressLoader");
const databaseLoader = require("./databaseLoader");

module.exports = async app => {
  expressLoader(app);
  await databaseLoader();
};
