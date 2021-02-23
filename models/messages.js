const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messagesSchema = new Schema({
  text: { type: String, required: true },
});

const Messages = mongoose.model("Messages", messagesSchema);

module.exports = Messages;
