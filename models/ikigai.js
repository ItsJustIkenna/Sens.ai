const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ikigaiSchema = new Schema({
  w_y_love: { type: String, required: true },
  w_y_g_at: { type: String, required: true },
  w_w_needs: { type: String, required: true },
  w_y_paid: { type: String, required: true },
});

const Ikigai = mongoose.model("Ikigai", ikigaiSchema);

module.exports = Ikigai;
