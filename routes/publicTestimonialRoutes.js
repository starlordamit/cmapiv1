// routes/publicTestimonialRoutes.js
import express from "express";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

// GET public testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ status: "public" });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
