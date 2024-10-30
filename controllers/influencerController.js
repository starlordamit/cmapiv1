// controllers/influencerController.js
const Influencer = require("../models/Influencer");

// Submit a new influencer form (Public)
exports.submitInfluencerForm = async (req, res) => {
  try {
    const { name, email, contactNumber, youtubeUrl, instagramUrl, remarks } =
      req.body;
    const influencer = new Influencer({
      name,
      email,
      contactNumber,
      youtubeUrl,
      instagramUrl,
      remarks,
    });
    await influencer.save();
    res
      .status(201)
      .json({ message: "Influencer form submitted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit influencer form." });
  }
};

// Fetch influencer forms with pagination (Authenticated)
exports.getInfluencerForms = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 25;

    const influencers = await Influencer.find()
      .skip((page - 1) * limit)
      .limit(limit);
    const total = await Influencer.countDocuments();

    res.json({
      data: influencers,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch influencer forms." });
  }
};

// Delete an influencer form (Authenticated)
exports.deleteInfluencerForm = async (req, res) => {
  try {
    await Influencer.findByIdAndDelete(req.params.id);
    res.json({ message: "Influencer form deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete influencer form." });
  }
};
exports.markInfluencerAsRead = async (req, res) => {
  try {
    const influencer = await Influencer.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!influencer) {
      return res.status(404).json({ message: "Influencer form not found." });
    }
    res.json({ message: "Influencer form marked as read.", data: influencer });
  } catch (error) {
    res.status(500).json({ error: "Failed to update read status." });
  }
};
