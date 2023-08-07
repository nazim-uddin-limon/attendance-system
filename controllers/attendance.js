const attendanceService = require("../services/attendanceService");

// Get attendance status weather it is active or not
const getAttendance = async (req, res, next) => {
  try {
    const attendance = await attendanceService.getRunningAttendance();
    if (!attendance) {
      return res.status(400).json({ message: "No attendance system running" });
    }
    res.status(200).json(attendance);
  } catch (e) {
    next(e);
  }
};

const getEnable = async (req, res, next) => {
  try {
    let attendance = await attendanceService.createAttendance(5);
    res.status(201).json(attendance);
  } catch (e) {
    next(e);
  }
};
const getDisable = async (req, res, next) => {
  try {
    await attendanceService.stopAttendance();
    res.status(203).json({ message: "Attendance Disabled" });
  } catch (e) {
    next(e);
  }
};

const giveAttendance = async (req, res, next) => {
  const user = req.user;
  try {
    await attendanceService.giveAttendance(user._id);
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};
module.exports = {
  getAttendance,
  getEnable,
  getDisable,
  giveAttendance,
};
