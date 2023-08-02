const User = require("../models/User");

const findByProperty = async (key, value) => {
  if (key === "_id") {
    return await User.fineById(value);
  }
  return await User.findOne({ [key]: value });
};
const createUser = async (name, email, password) => {
  try {
    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
    return user;
  } catch (e) {
    return {
      message: e.message,
    };
  }
};

module.exports = { findByProperty, createUser };
