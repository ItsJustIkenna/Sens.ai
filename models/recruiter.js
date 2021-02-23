const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, data: Buffer },
  name: { type: String, required: true },
  position: { type: String, required: true },
  website: { type: String, required: true },
  op_id: { type: Object, required: true },
  ikigai: { type: Object, required: true },
});
