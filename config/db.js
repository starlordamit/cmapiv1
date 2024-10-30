// config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return; // Prevent multiple connections

  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) throw new Error("MongoDB URI is undefined");

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectDB;
