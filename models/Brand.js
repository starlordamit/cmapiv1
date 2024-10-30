// models/Brand.js
import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: String,
  description: String,
  status: { type: String, enum: ["public", "private"], default: "private" },
});

const Brand = mongoose.model("Brand", BrandSchema);
export default Brand;
