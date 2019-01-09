const mongoose = require("mongoose");
const db = async uri => {
  try {
    mongoose.set('useFindAndModify', false);
    await mongoose.connect(
      uri,
      { useNewUrlParser: true }
    );
    console.log("Successfully connected to database");
  } catch (err) {
    console.error({ err }, "DB connection failed.");
  }
};
module.exports = db;
