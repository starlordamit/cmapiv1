// models/Brand.js
const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: String,
  description: String,
  status: { type: String, enum: ["public", "private"], default: "private" },
});

module.exports = mongoose.model("Brand", BrandSchema);
