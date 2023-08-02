const router = require("express").Router();
router.get("/health", (req, res) => {
  res.status(200).json({ message: "Success" });
});
// using routes
router.use(require("./auth"));
router.use(require("./test"));
router.use(require("./home"));
router.use(require("./users"));

module.exports = router;
