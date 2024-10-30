// server.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import creatorRoutes from "./routes/creatorRoutes.js";
import brandRoutes from "./routes/brandRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import publicCreatorRoutes from "./routes/publicCreatorRoutes.js";
import publicBrandRoutes from "./routes/publicBrandRoutes.js";
import publicTestimonialRoutes from "./routes/publicTestimonialRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import influencerRoutes from "./routes/influencerRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Set up routes
app.use("/api/auth", authRoutes);
app.use("/api/creators", creatorRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/testimonials", testimonialRoutes);

// Public routes
app.use("/api/public/creators", publicCreatorRoutes);
app.use("/api/public/brands", publicBrandRoutes);
app.use("/api/public/testimonials", publicTestimonialRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/influencer", influencerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
