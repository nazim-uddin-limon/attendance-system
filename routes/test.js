const router = require("express").Router();
const testController = require("../controllers/testController");
router.get("/test", testController);

module.exports = router;
