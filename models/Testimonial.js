// models/Testimonial.js
const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  pocName: String,
  message: String,
  imageUrl: String,
  status: { type: String, enum: ["public", "private"], default: "private" },
});

module.exports = mongoose.model("Testimonial", TestimonialSchema);
