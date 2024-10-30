// routes/brandRoutes.js
const express = require("express");
const {
  createBrand,
  getBrands,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, createBrand);
router.get("/", auth, getBrands);
router.put("/:id", auth, updateBrand);
router.delete("/:id", auth, deleteBrand);

module.exports = router;
