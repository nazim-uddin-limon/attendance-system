const User = require("../models/User");
const error = require("../utils/error");
const bcrypt = require("bcrypt");

// find all users
const findUsers = () => {
  /**
   * TODO: Filter user, sort user
   */
  return User.find();
};

// Find users by property
const findByProperty = async (key, value) => {
  if (key === "_id") {
    return await User.findById(value);
  }
  return await User.findOne({ [key]: value });
};

// Create user
const createUser = async (name, email, password, role, accountStatus) => {
  let user = await findByProperty("email", email);
  if (user) {
    throw error("User alrady exist", 400);
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  try {
    const user = new User({
      name,
      email,
      password: hash,
      role: role ? role : ["STUDENT"],
      accountStatus: accountStatus ? accountStatus : "PENDING",
    });
    await user.save();
    return user;
  } catch (e) {
    return {
      message: e.message,
    };
  }
};

// Delete users by id
const deleteUserById = async (id) => {
  await User.findOneAndRemove({ _id: id });
};

module.exports = {
  createUser,
  findUsers,
  findByProperty,
  deleteUserById,
};
