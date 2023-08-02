const error = require("../utils/error");
const User = require("../models/User");
const testService = async () => {
  const user = await User.findOne({ email: "nazim@gmail.com" });
  console.log(user);
  if (user) {
    throw error("User exist", 400);
  }
};

module.exports = { testService };
