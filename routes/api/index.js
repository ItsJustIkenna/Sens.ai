const path = require("path");
const router = require("express").Router();
const ikigaiRoutes = require("./ikigai");
const recruiterRoutes = require("./recruiters");
const recruitRoutes = require("./recruits");
const skillsRoutes = require("./skills");
const projectsRoutes = require("./projects");
const messagesRoutes = require("./messages");
const openPositionsRoutes = require("./openPositions");
const signInRoutes = require("./signin");
const userRoutes = require("./user");

// Ikigai routes
router.use("/ikigai", ikigaiRoutes);

// Recruiter Routes
router.use("/recruiter", recruiterRoutes);

// Recruitee Routes
router.use("/recruit", recruitRoutes);

// Skills Routes
router.use("/skills", skillsRoutes);

// Projects Routes
router.use("/projects", projectsRoutes);

// Messages Routes
router.use("/messages", messagesRoutes);

// Open Positions Routes
router.use("/openPositions", openPositionsRoutes);

// Login Routes
router.use("/signin", signInRoutes);

// User Routes
router.use("/user", userRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
