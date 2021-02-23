const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const openPositionsSchema = new Schema({
  title: { type: String, required: true },
  pay: { type: Number, required: true },
});

const OpenPositions = mongoose.model("OpenPositions", openPositionsSchema);

module.exports = OpenPositions;
