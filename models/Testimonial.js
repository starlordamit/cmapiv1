// models/Testimonial.js
import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  pocName: String,
  message: String,
  imageUrl: String,
  status: { type: String, enum: ["public", "private"], default: "private" },
});

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);
export default Testimonial;
