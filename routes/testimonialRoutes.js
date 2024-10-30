// routes/testimonialRoutes.js
import express from "express";
import {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// Protect all routes with `auth` middleware
router.post("/", auth, createTestimonial);
router.get("/", auth, getTestimonials);
router.put("/:id", auth, updateTestimonial);
router.delete("/:id", auth, deleteTestimonial);

export default router;
