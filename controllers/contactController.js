// controllers/contactController.js
import Contact from "../models/Contact.js";

// Submit a new contact form (Public)
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, contactNumber, message } = req.body;
    const contact = new Contact({ name, email, contactNumber, message });
    await contact.save();
    res.status(201).json({ message: "Contact form submitted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit contact form." });
  }
};

// Fetch contact forms with pagination (Authenticated)
export const getContactForms = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 25;

    const contacts = await Contact.find()
      .skip((page - 1) * limit)
      .limit(limit);
    const total = await Contact.countDocuments();

    res.json({
      data: contacts,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact forms." });
  }
};

// Delete a contact form (Authenticated)
export const deleteContactForm = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact form deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contact form." });
  }
};

// Mark contact as read (Authenticated)
export const markContactAsRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ message: "Contact form not found." });
    }
    res.json({ message: "Contact form marked as read.", data: contact });
  } catch (error) {
    res.status(500).json({ error: "Failed to update read status." });
  }
};
