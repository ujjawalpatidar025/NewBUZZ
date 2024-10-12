const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the Admin Schema
const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Hash the password before saving the Admin model
adminSchema.pre("save", async function (next) {
  const Admin = this;

  // Hash the password only if it has been modified or is new
  if (!Admin.isModified("password")) return next();

  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    Admin.password = await bcrypt.hash(Admin.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password for login
adminSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create and export the Admin model
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
