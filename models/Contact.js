// models/Contact.js
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false }, // New field for read status
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;
