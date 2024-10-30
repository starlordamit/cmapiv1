// routes/publicBrandRoutes.js
const express = require("express");
const Brand = require("../models/Brand");

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

module.exports = router;
