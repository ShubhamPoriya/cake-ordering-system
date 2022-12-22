const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: String,
  itemDesc: String,
  itemBasePrice: Number,
  itemImage: String,
});

module.exports = mongoose.model("Item", itemSchema);
