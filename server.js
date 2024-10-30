// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const morgan = require("morgan"); // For request logging
const mongoose = require("mongoose");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL in production
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(morgan("dev")); // Logs incoming requests to the console

// Function to check the database connection status
const getConnectionStatus = () => {
  const status = mongoose.connection.readyState;
  switch (status) {
    case 0:
      return "Disconnected";
    case 1:
      return "Connected";
    case 2:
      return "Connecting";
    case 3:
      return "Disconnecting";
    default:
      return "Unknown";
  }
};

// Root route to show API welcome message and database connection status
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
    databaseStatus: getConnectionStatus(),
  });
});

// Authentication and core routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/creators", require("./routes/creatorRoutes"));
app.use("/api/brands", require("./routes/brandRoutes"));
app.use("/api/testimonials", require("./routes/testimonialRoutes"));

// Public routes
app.use("/api/public/creators", require("./routes/publicCreatorRoutes"));
app.use("/api/public/brands", require("./routes/publicBrandRoutes"));
app.use(
  "/api/public/testimonials",
  require("./routes/publicTestimonialRoutes")
);

// Additional routes for Contact and Influencer forms
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/influencer", require("./routes/influencerRoutes"));

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
