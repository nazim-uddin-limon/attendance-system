const homeController = (req, res) => {
  res.status(200).json(req.user);
};

module.exports = homeController;
