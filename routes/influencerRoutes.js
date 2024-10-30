// routes/influencerRoutes.js

const express = require("express");
const {
  submitInfluencerForm,
  getInfluencerForms,
  deleteInfluencerForm,
  markInfluencerAsRead,
} = require("../controllers/influencerController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Routes
router.post("/submit", submitInfluencerForm);
router.get("/", auth, getInfluencerForms);
router.delete("/:id", auth, deleteInfluencerForm);
router.patch("/:id/read", auth, markInfluencerAsRead); // New endpoint to mark as read

module.exports = router;
