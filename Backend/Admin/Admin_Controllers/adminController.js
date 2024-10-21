const Admin = require("../../Models/Admin"); // Adjust the path to your Admin model
const jwt = require("jsonwebtoken"); // Import JWT for token generation
const User = require("../../Models/User");

// Admin login function
const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send response with the token
    return res.status(200).json({ message: "Admin Login Successful", token });
  } catch (error) {
    console.error("Error during admin login:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Admin create user function
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // Create a new user
    const newUser = new Admin({
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllUser = async (req, res) => {
  try {
    const response = await Admin.find();

    res.status(200).json({ users: response });
  } catch (error) {
    console.error("Error getting all users:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

module.exports = { adminLogin, createUser, getAllUser };
