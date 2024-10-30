// api/contact.js
import connectDB from "../config/db";
import {
  submitContactForm,
  getContactForms,
  deleteContactForm,
  markContactAsRead,
} from "../controllers/contactController";
import { verifyToken } from "../middleware/authMiddleware";

export default async (req, res) => {
  await connectDB();

  switch (req.method) {
    case "POST":
      return submitContactForm(req, res);
    case "GET":
      await verifyToken(req, res);
      return getContactForms(req, res);
    case "DELETE":
      await verifyToken(req, res);
      return deleteContactForm(req, res);
    case "PATCH":
      await verifyToken(req, res);
      return markContactAsRead(req, res);
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE", "PATCH"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
