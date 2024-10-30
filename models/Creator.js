// models/Creator.js
import mongoose from "mongoose";

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

const Creator = mongoose.model("Creator", CreatorSchema);
export default Creator;
