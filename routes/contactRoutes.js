// routes/contactRoutes.js
import express from "express";
import {
  submitContactForm,
  getContactForms,
  deleteContactForm,
  markContactAsRead,
} from "../controllers/contactController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes
router.post("/submit", submitContactForm);
router.get("/", auth, getContactForms);
router.delete("/:id", auth, deleteContactForm);
router.patch("/:id/read", auth, markContactAsRead); // Endpoint to mark as read

export default router;
