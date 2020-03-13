const express = require("express");
const app = require("./app");
const colors = require("colors");
const { PORT } = require("./config/globals");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.blue.underline.bold);
});
