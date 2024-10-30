// routes/publicCreatorRoutes.js
import express from "express";
import Creator from "../models/Creator.js";

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

export default router;
