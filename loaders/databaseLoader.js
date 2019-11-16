const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myblog', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (e) {
    console.log('DATABASE LOADER HAS ERROR');
    throw e;
  }
};
