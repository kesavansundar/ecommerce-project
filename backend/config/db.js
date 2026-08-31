const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(
      "Mongo URI type:",
      process.env.MONGO_URI?.startsWith("mongodb+srv://")
        ? "ATLAS"
        : "LOCAL/UNKNOWN"
    );

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;