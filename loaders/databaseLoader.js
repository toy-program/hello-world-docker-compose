const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (e) {
    console.log('DATABASE LOADER HAS ERROR');
    throw e;
  }
};
