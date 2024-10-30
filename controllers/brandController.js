// controllers/brandController.js
import Brand from "../models/Brand.js";

export const createBrand = async (req, res) => {
  try {
    const brand = new Brand(req.body);
    await brand.save();
    res.status(201).json(brand);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(brand);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteBrand = async (req, res) => {
  try {
    await Brand.findByIdAndDelete(req.params.id);
    res.json({ message: "Brand deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
