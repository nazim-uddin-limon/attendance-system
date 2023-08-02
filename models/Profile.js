const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNo: String,
  avater: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Profile = new model("Profile", profileSchema);

module.exports = Profile;
