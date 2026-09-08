const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection successful");
  } catch (err) {
    console.log("Database connection failed", err);
  }
};

module.exports = connectToDB;
