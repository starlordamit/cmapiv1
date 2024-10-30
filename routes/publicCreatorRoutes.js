// routes/publicCreatorRoutes.js
const express = require("express");
const Creator = require("../models/Creator");

const router = express.Router();

// GET public creators
router.get("/", async (req, res) => {
  try {
    const creators = await Creator.find({ status: "public" });
    res.json(creators);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
