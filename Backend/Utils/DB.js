const mongoose = require("mongoose");

const connection = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  // Debugging log
  console.log("MONGO_URI:", MONGO_URI);

  if (!MONGO_URI) {
    console.error(
      "MongoDB connection string is not defined in environment variables."
    );
    return;
  }

  console.log("Connecting to MongoDB...");

  try {
    // Remove useNewUrlParser and useUnifiedTopology options
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Error occurred while connecting to MongoDB:", err);
  }
};

// const createUser = async () => {
//   try {
//     const newUser = new Admin({
//       email: "admin@gmail.com",
//       password: "admin", // Use a strong password in a real application
//     });

//     // Save the user to the database
//     await newUser.save();
//     console.log("Admin created successfully:", newUser);
//   } catch (error) {
//     console.error("Error creating user:", error);
//   }
// };

module.exports = connection;
