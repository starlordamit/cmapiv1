// models/Influencer.js
const mongoose = require("mongoose");

const InfluencerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  youtubeUrl: { type: String, required: true },
  instagramUrl: { type: String, required: true },
  remarks: { type: String },
  read: { type: Boolean, default: false }, // New field for read status
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Influencer", InfluencerSchema);
