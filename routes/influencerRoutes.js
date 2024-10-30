// routes/influencerRoutes.js
import express from "express";
import {
  submitInfluencerForm,
  getInfluencerForms,
  deleteInfluencerForm,
  markInfluencerAsRead,
} from "../controllers/influencerController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes
router.post("/submit", submitInfluencerForm);
router.get("/", auth, getInfluencerForms);
router.delete("/:id", auth, deleteInfluencerForm);
router.patch("/:id/read", auth, markInfluencerAsRead); // Endpoint to mark as read

export default router;
