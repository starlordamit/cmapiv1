// config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return; // Prevent multiple connections

  try {
    const mongoURI =
      "mongodb+srv://amitkumar9410464303:tRIHD2Pa9GXrFJN4@cluster0.hu9td.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
