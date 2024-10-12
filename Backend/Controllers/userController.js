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
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h", // Token expires in 1 hour
      }
    );

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

module.exports = { login };
