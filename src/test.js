import mongoose from "mongoose";
import dotenv from "dotenv";
import Food from "./models/Food.js";

dotenv.config();

const testMongo = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected for testing!");

    // Create a test food donation
    const testFood = new Food({
      name: "Test Pizza",
      quantity: 5,
      location: "Hostel Canteen",
      contact: "9999999999",
      description: "Vegetarian",
    });

    // Save to database
    const saved = await testFood.save();
    console.log("Test food saved:", saved);

    // Fetch all food donations
    const allFood = await Food.find();
    console.log("All food donations:", allFood);

    // Disconnect
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  } catch (error) {
    console.error("Error testing Food model:", error);
  }
};

testMongo();
