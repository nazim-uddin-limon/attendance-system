const { Schema, model } = require("mongoose");

const adminAttendanceSchema = new Schema(
  {
    timeLimit: Number,
    status: {
      type: String,
      required: true,
      enum: ["RUNNING", "COMPLETED"],
      default: "RUNNING",
    },
  },
  { timestamps: true }
);

const AdminAttendance = new model("AdminAttendance", adminAttendanceSchema);

module.exports = AdminAttendance;
