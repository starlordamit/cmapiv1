// routes/brandRoutes.js
import express from "express";
import {
  createBrand,
  getBrands,
  updateBrand,
  deleteBrand,
} from "../controllers/brandController.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createBrand);
router.get("/", verifyToken, getBrands);
router.put("/:id", verifyToken, updateBrand);
router.delete("/:id", verifyToken, deleteBrand);

export default router;
