const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");
const homeController = require("../controllers/homeController");
router.get("/", authenticate, homeController);

module.exports = router;
