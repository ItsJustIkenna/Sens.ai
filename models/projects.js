const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
});

const Projects = mongoose.model("Projects", projectsSchema);

module.exports = Projects;
