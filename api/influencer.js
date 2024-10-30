// api/influencer.js
import connectDB from "../config/db";
import {
  submitInfluencerForm,
  getInfluencerForms,
  deleteInfluencerForm,
  markInfluencerAsRead,
} from "../controllers/influencerController";
import { verifyToken } from "../middleware/authMiddleware";

export default async (req, res) => {
  await connectDB();

  switch (req.method) {
    case "POST":
      return submitInfluencerForm(req, res);
    case "GET":
      await verifyToken(req, res);
      return getInfluencerForms(req, res);
    case "DELETE":
      await verifyToken(req, res);
      return deleteInfluencerForm(req, res);
    case "PATCH":
      await verifyToken(req, res);
      return markInfluencerAsRead(req, res);
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE", "PATCH"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
