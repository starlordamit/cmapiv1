// controllers/creatorController.js
import Creator from "../models/Creator.js";

export const createCreator = async (req, res) => {
  try {
    const creator = new Creator(req.body);
    await creator.save();
    res.status(201).json(creator);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCreators = async (req, res) => {
  try {
    const creators = await Creator.find();
    res.json(creators);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateCreator = async (req, res) => {
  try {
    const creator = await Creator.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(creator);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCreator = async (req, res) => {
  try {
    await Creator.findByIdAndDelete(req.params.id);
    res.json({ message: "Creator deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
