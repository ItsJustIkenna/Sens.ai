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
  open_positions: [
    {
      type: Schema.Types.ObjectId,
      ref: "openPositions",
    },
  ],
  ikigai: [
    {
      type: Schema.Types.ObjectId,
      ref: "ikigai",
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "messages",
    },
  ],
});

const Recruiter = mongoose.model("Recruiter", recruiterSchema);

module.exports = Recruiter;
