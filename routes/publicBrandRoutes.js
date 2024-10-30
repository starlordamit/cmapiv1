// routes/publicBrandRoutes.js
import express from "express";
import Brand from "../models/Brand.js";

const router = express.Router();

// GET public brands
router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find({ status: "public" });
    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
