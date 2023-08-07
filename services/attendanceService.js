const AdminAttendance = require("../models/adminAttendance");
const StudentAttendance = require("../models/student-attendance");

const error = require("../utils/error");

// Get running attendance
const getRunningAttendance = async () => {
  return await AdminAttendance.findOne({ status: "RUNNING" });
};

// Create new attendance
const createAttendance = async (timeLimit) => {
  let attendance = await getRunningAttendance();
  if (attendance) {
    throw error("Already Running");
  }
  attendance = new AdminAttendance({
    timeLimit,
  });
  await attendance.save();
  return attendance;
};

// Stop running attendance
const stopAttendance = async () => {
  let attendance = await getRunningAttendance();
  if (!attendance) {
    throw error("No attendance is running", 400);
  }
  attendance.status = "COMPLETED";
  await attendance.save();
};

// Give Attendance
const giveAttendance = async (studentId) => {
  let attendance = await getRunningAttendance();
  if (!attendance) {
    throw error("No attendance is running", 400);
  }
  const studentAttendance = new StudentAttendance({
    user: studentId,
    adminAttendance: attendance._id,
  });
  return await studentAttendance.save();
};

module.exports = {
  getRunningAttendance,
  createAttendance,
  stopAttendance,
  giveAttendance,
};
