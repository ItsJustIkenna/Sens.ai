const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    recruiter: [
        {
          type: Schema.Types.ObjectId,
          ref: "Recruiter",
        },
      ],
      recruit: [
        {
          type: Schema.Types.ObjectId,
          ref: "Recruit",
        },
      ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;