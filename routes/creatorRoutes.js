// routes/creatorRoutes.js
const express = require("express");
const {
  createCreator,
  getCreators,
  updateCreator,
  deleteCreator,
} = require("../controllers/creatorController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, createCreator);
router.get("/", auth, getCreators);
router.put("/:id", auth, updateCreator);
router.delete("/:id", auth, deleteCreator);

module.exports = router;
