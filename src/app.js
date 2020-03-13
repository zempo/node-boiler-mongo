require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { NODE_ENV } = require("./config/globals");

connectDB();
const app = express();
//
// MIDDLEWARE
//
app.use(cors());
const morganSettings = NODE_ENV === "production" ? "tiny" : "dev";
app.use(morgan(morganSettings));
app.use(helmet());
//
// ROUTES
//

// MAIN
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactKeeper API..." })
);

module.exports = app;
