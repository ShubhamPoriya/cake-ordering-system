const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: String,
  itemDesc: String,
  itemBasePrice: Number,
  itemImage: Buffer,
});

module.exports = mongoose.model("Item", itemSchema);
