import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Connection code
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error", error.message);
    process.exit(1); // Exit process if connection fails
  }
};
export default dbConnection;
