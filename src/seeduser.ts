import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db";
import User from "./models/User";

dotenv.config();

const seedUser = async () => {
  try {
    await connectDB();

    const newUser = await User.create({
      name: "Test User",
      email: "testuser@example.com",
    });

    console.log("✅ User seeded successfully:", newUser);
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding user:", error);
    process.exit(1);
  }
};

seedUser();
