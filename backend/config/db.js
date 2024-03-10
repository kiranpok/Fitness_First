const mongoose = require("mongoose");
const config = require("../utils/config");

const connectDB = async () => {
  try {
    // Print out MongoDB URI for debugging
    console.log("MongoDB URI:", config.MONGO_URI);

    const conn = await mongoose.connect(config.MONGO_URI);
    console.log(`Connected to database`);
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    // Handle error appropriately, such as throwing or returning it
  }
};

module.exports = connectDB;
