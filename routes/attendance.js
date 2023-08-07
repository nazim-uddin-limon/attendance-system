const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");
router.use(authenticate);
const {
  getAttendance,
  getEnable,
  getDisable,
  giveAttendance,
} = require("../controllers/attendance");
router.get("/", getAttendance);
router.get("/enable", getEnable);
router.get("/disable", getDisable);
router.get("/attend", giveAttendance);

module.exports = router;
