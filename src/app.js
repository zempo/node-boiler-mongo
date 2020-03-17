require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { NODE_ENV } = require("./config/globals");

const app = express();
connectDB();
//
// MIDDLEWARE
//
app.use(cors());
const morganSettings = NODE_ENV === "production" ? "tiny" : "dev";
app.use(morgan(morganSettings));
app.use(helmet());
// body parser
app.use(express.json({ extended: false }));
//
// ROUTES
//

// MAIN
app.get("/", (req, res) => res.json({ msg: "Welcome to my API..." }));

module.exports = app;
