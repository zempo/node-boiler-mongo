const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  body: {
    type: String,
    trim: true,
    required: [true, "Please add an item description"]
  },
  amount: {
    type: Number,
    required: [true, "Please add a + or - number"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Item", ItemSchema);
