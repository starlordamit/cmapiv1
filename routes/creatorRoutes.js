// routes/creatorRoutes.js
import express from "express";
import {
  createCreator,
  getCreators,
  updateCreator,
  deleteCreator,
} from "../controllers/creatorController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, createCreator);
router.get("/", auth, getCreators);
router.put("/:id", auth, updateCreator);
router.delete("/:id", auth, deleteCreator);

export default router;
