const mongoose = require("mongoose");
const dbConnection = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/attendanceSystem2");
    console.log("database connected");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = dbConnection;
