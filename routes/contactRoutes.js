// routes/contactRoutes.js

const express = require("express");
const {
  submitContactForm,
  getContactForms,
  deleteContactForm,
  markContactAsRead,
} = require("../controllers/contactController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Routes
router.post("/submit", submitContactForm);
router.get("/", auth, getContactForms);
router.delete("/:id", auth, deleteContactForm);
router.patch("/:id/read", auth, markContactAsRead); // New endpoint to mark as read

module.exports = router;
