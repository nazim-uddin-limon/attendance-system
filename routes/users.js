const router = require("express").Router();
const userController = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

router.get("/users", authenticate, userController.findUser);

module.exports = router;
