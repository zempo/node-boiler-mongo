const express = require("express");
const mainRouter = express.Router();

const { getItems } = require("../controllers/mainControl");

mainRouter.route("/").get(getItems);

module.exports = mainRouter;
