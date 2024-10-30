// api/index.js
import connectDB from "../config/db";

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
