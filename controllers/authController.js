const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { registerService, loginService } = require("../services/authService");

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All field Required" });
  }
  try {
    const user = await registerService(name, email, password);
    res.status(201).json({ message: "User creaed", user });
  } catch (e) {
    return res.status(e.status).json({ message: e.message });
  }
};
// Login controoler
const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "enter your credential" });
  }
  try {
    const token = await loginService(email, password);
    res.status(200).json({ message: "Access granted", token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  registerController,
  loginController,
};
