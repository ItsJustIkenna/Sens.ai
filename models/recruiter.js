const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  profile_picture: { data: Buffer, contentType: String },
  name: { type: String, required: true },
  position: { type: String, required: true },
  website: { type: String, required: true },
  bio: { type: String, required: true },
  company: { type: String, required: true },
  open_positions: [
    {
      type: Schema.Types.ObjectId,
      ref: "OpenPositions",
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

const Recruiter = mongoose.model("Recruiter", recruiterSchema);

module.exports = Recruiter;
