const { Schema, model } = require("mongoose");

const sAttendanceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    adminAttendance: {
      type: Schema.Types.ObjectId,
      ref: "adminAttendance",
      required: true,
    },
  },
  { timestamps: true }
);
const StudentAttendance = new model("StudentAttendance", sAttendanceSchema);

module.exports = StudentAttendance;
