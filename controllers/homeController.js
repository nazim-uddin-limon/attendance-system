const homeServie = require("../services/homeService");
const homeController = (req, res) => {
  homeServie();
  res.status(200).json({ message: "ok" });
};

module.exports = homeController;
