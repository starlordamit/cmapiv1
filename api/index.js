// api/index.js
import mongoose from "mongoose";
import connectDB from "../config/db"; // Make sure this path is correct

export default async (req, res) => {
  await connectDB();

  const status = mongoose.connection.readyState;
  const databaseStatus =
    ["Disconnected", "Connected", "Connecting", "Disconnecting"][status] ||
    "Unknown";

  res.json({
    message: "Welcome to the API",
    databaseStatus,
  });
};
