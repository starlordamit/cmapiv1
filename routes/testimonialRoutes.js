// routes/testimonialRoutes.js
const express = require("express");
const {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Protect all routes with `auth` middleware
router.post("/", auth, createTestimonial);
router.get("/", auth, getTestimonials);
router.put("/:id", auth, updateTestimonial);
router.delete("/:id", auth, deleteTestimonial);

module.exports = router;
