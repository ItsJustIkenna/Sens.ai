const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const app = express();
const routes = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Cors());

app.use(express.static("client/build"));

const mongodb = process.env.MONGODB;

mongoose
  .connect(process.env.MONGODB_URI || mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
