const userService = require("../services/userService");

// Create user
const postUser = (req, res) => {};

// find All user
const findUser = async (req, res) => {
  const users = await userService.findUsers();
  res.status(200).json({
    message: `total users: ${users.length}`,
    users,
  });
};

// find user by id
const findUserById = (req, res) => {};

// Update user
const updateUser = (req, res) => {};

// Delete user by id
const deleteUser = (req, res) => {};

module.exports = {
  postUser,
  findUser,
  findUserById,
  updateUser,
  deleteUser,
};
