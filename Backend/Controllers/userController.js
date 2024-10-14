const jwt = require("jsonwebtoken");
const User = require("../Models/User");

// User login
const login = async (req, res) => {
  const { email } = req.body;
  const UserPswd = req.body.password;

  try {
    // Find the user by username
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the entered password with the stored hashed password
    const isMatch = await user.comparePassword(UserPswd);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

    const { password, ...Filteruser } = user._doc;

    // Send the token as a response
    return res.status(200).json({
      message: "Login successful",
      token: token,
      user: Filteruser,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// controller for reset Token

const resetToken = async (req, res) => {
  try {
    const email = req.user.email;

    // Check if the user with the given email exists

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized User!" });
    }

    // Generate a JWT token

    const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
    const { password, ...FilterUser } = user._doc;
    return res.status(200).json({ token: token, user: FilterUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { login, resetToken };
