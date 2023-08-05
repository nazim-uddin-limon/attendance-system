const jwt = require("jsonwebtoken");

const autenticate = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ message: "Not Authorized" });
  }
  token = token.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: "Not authorized" });
  }
};

module.exports = autenticate;
