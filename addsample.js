// addSampleData.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Creator = require("./models/Creator");
const Brand = require("./models/Brand");
const Testimonial = require("./models/Testimonial");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const addSampleData = async () => {
  try {
    // Sample data for creators
    const creators = Array.from({ length: 10 }, (_, i) => ({
      name: `Creator ${i + 1}`,
      youtubeUrl: `https://youtube.com/creator${i + 1}`,
      instagramUrl: `https://instagram.com/creator${i + 1}`,
      phone: `12345678${i}`,
      whatsapp: `12345678${i}`,
      email: `creator${i + 1}@example.com`,
      description: `Content creator ${i + 1} specializing in various topics.`,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      status: i % 2 === 0 ? "public" : "private",
    }));

    // Sample data for brands
    const brands = Array.from({ length: 10 }, (_, i) => ({
      name: `Brand ${i + 1}`,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      description: `Brand ${i + 1} known for quality products.`,
      status: i % 2 === 0 ? "public" : "private",
    }));

    // Sample data for testimonials
    const testimonials = Array.from({ length: 10 }, (_, i) => ({
      brand: `Brand ${i + 1}`,
      pocName: `POC Name ${i + 1}`,
      message: `Testimonial message ${i + 1} praising the brand's service.`,
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      status: i % 2 === 0 ? "public" : "private",
    }));

    // Insert data into the collections
    await Creator.insertMany(creators);
    await Brand.insertMany(brands);
    await Testimonial.insertMany(testimonials);

    console.log("Sample data added successfully.");
    mongoose.connection.close();
  } catch (err) {
    console.error(err.message);
    mongoose.connection.close();
  }
};

// Connect to the database and run the script
connectDB().then(addSampleData);
