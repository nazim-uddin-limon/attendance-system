const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const error = require("../utils/error");
const registerService = async (name, email, password) => {
  let user = await User.findOne({ email: email });
  console.log(user);
  if (user) {
    throw await error("User Already Exist", 400);
  }
  //   const salt = bcrypt.genSalt(10);
  //   const hash = bcrypt.hash(password, salt);
  try {
    user = new User({
      name,
      email,
      password,
    });
    await user.save();
    return user;
  } catch (e) {
    console.log(e);
  }
};

const loginService = async (email, password) => {
  const user = await user.findOne({ email: email });
  if (!user) {
    return res.status(400).json("User not found");
  }
  const isMatch = user.password === password;
  if (!isMatch) {
    return res.status(400).json({ message: "Password did not match" });
  }
  const paylode = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
  };
  const token = jwt.sign(paylode, process.env.JWT_SECRET, { expiresIn: "2h" });
  return {
    message: "Login successfull",
    token,
  };
};
module.exports = {
  registerService,
  loginService,
};
