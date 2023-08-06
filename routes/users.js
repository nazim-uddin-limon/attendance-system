const router = require("express").Router();
const userController = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

router.get("/users/:id", authenticate, userController.findUserById);
router.delete("/users/:id", authenticate, userController.deleteUser);
router.post("/add-user", authenticate, userController.postUser);
router.get("/users", userController.findUser);

module.exports = router;
