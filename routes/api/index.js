const path = require("path");
const router = require("express").Router();
const ikigaiRoutes = require("./ikigai");
const recruiterRoutes = require("./recruiters");
const recruiteeRoutes = require("./recruitees");
const skillsRoutes = require("./skills");
const projectsRoutes = require("./projects");
const messagesRoutes = require("./messages");
const openPositionsRoutes = require("./openPositions");
const loginRoutes = require("./login");

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

// Messages Routes
router.use("/messages", messagesRoutes);

//Open Positions Routes
router.use("/openPositions", openPositionsRoutes);

// Open Login Routes
router.use("/login", loginRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
