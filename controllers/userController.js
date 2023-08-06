const userService = require("../services/userService");

// Create user
const postUser = async (req, res) => {
  const { name, email, password, role, accountStatus } = req.body;
  try {
    const user = await userService.createUser(
      name,
      email,
      password,
      role,
      accountStatus
    );
    res.status(201).json({ message: "User created", user });
  } catch (e) {
    res.status(e.status).json({ message: e.message });
  }
};

// find All user
const findUser = async (req, res) => {
  const users = await userService.findUsers();
  res.status(200).json({
    message: `total users: ${users.length}`,
    users,
  });
};

// find user by id
const findUserById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await userService.findByProperty("_id", id);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not Found" });
    }
    res.status(200).json({ user });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// Update user
const updateUser = (req, res) => {};

// Delete user by id
const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userService.findByProperty("_id", id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    await userService.deleteUserById(id);
    res.status(203).send();
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = {
  postUser,
  findUser,
  findUserById,
  updateUser,
  deleteUser,
};
