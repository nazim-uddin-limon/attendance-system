const jwt = require("jsonwebtoken");

const autenticate = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: "Not authorized" });
  }
};

module.exports = autenticate;
