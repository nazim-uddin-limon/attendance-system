const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const error = require("../utils/error");
const userService = require("./userService");

// Register service
const registerService = async (name, email, password) => {
  let user = await userService.findByProperty("email", email);

  if (user) {
    throw error("User already Exist", 400);
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  try {
    return await userService.createUser(name, email, hash);
  } catch (e) {
    res.status(e.status).json({ message: e.message });
  }
};

/**
 *
 * @param {String} email
 * @param {String} password
 * @returns
 */
const loginService = async (email, password) => {
  const user = await userService.findByProperty("email", email);
  if (!user) {
    throw error("Access denied", 400);
  }
  const passIsMatch = await bcrypt.compare(password, user.password);
  if (!passIsMatch) {
    throw error("Invalid Credential", 400);
  }
  const paylode = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    accountStatus: user.accountStatus,
  };
  try {
    const token = jwt.sign(paylode, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    return token;
  } catch (e) {
    return e;
  }
};
module.exports = {
  registerService,
  loginService,
};
