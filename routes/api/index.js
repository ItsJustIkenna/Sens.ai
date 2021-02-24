const path = require("path");
const router = require("express").Router();
const ikigaiRoutes = require("./ikigai");
const recruiterRoutes = require("./recruiters");
const recruiteeRoutes = require("./recruitees");
const skillsRoutes = require("./skills");
const projectsRoutes = require("./projects");
const messagesRoutes = require("./messages");

// Ikigai routes
router.use("/ikigai", ikigaiRoutes);

// Recruiter Routes
router.use("/recruiter", recruiterRoutes);

// Recruitee Routes
router.use("/recruitee", recruiteeRoutes);

// Skills Routes
router.use("/skills", skillsRoutes);

// Projects Routes
router.use("/projects", projectsRoutes);

//Messages Routes
router.use("/messages", messagesRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
