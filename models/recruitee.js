const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recruiteeSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  profile_picture: { data: Buffer, contentType: String },
  bio: { type: String, required: true },
  name: { type: String, required: true },
  resume: { data: Buffer, contentType: String },
  age: { type: Number, required: true },
  education: { type: String, required: true },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "projects",
    },
  ],
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "skills",
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

const Recruitee = mongoose.model("Recruitee", recruiteeSchema);

module.exports = Recruitee;
