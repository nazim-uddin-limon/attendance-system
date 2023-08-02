const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const error = require("../utils/error");

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All field Required" });
  }
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User exist" });
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  try {
    user = new User({
      name,
      email,
      password: hash,
    });
    await user.save();
    res.status(201).json({ message: "User creaed", user });
  } catch (e) {
    console.log(e);
  }
};
const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "enter your credential" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Access denied" });
  }
  const passIsMatch = bcrypt.compare(password, user.password);
  if (!passIsMatch) {
    return res.status(400).json({ message: "Invalid Credential" });
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
    res.status(200).json({ message: "Access granted", token });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  registerController,
  loginController,
};
