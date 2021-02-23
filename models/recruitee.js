const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recruiteeSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  profile_picture: { type: Image, required: true },
  bio: { type: String, required: true },
  name: { type: String, required: true },
  resume: { type: Image, required: true },
  age: { type: Number, required: true },
  education: { type: String, required: true },
  projects: { type: Object, required: true },
  skills: { type: Object, required: true },
  ikigai: { type: Object, required: true },
});

const Recruitee = mongoose.model("Post", recruiteeSchema);

module.exports = Recruitee;
