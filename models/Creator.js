// models/Creator.js
const mongoose = require("mongoose");

const CreatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  youtubeUrl: String,
  instagramUrl: String,
  phone: String,
  whatsapp: String,
  email: String,
  description: String,
  imageUrl: String,
  status: { type: String, enum: ["public", "private"], default: "private" },
});

module.exports = mongoose.model("Creator", CreatorSchema);
