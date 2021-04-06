const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recruitSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  profilePictureUrl: { type: String, required: true },
  bio: { type: String, required: true },
  name: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  age: { type: Number, required: true },
  education: { type: String, required: true },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Projects",
    },
  ],
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skills",
    },
  ],
  ikigai: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ikigai",
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Messages",
    },
  ],
});

const Recruit = mongoose.model("Recruit", recruitSchema);

module.exports = Recruit;
