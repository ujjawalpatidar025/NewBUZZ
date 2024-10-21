const express = require("express");
const adminController = require("../Admin_Controllers/adminController"); // Adjust the path to your controller

const router = express.Router();

// Login route for admin
router.post("/login", adminController.adminLogin);
router.post("/create-user", adminController.createUser);
router.get("/get-all-user", adminController.getAllUser);

module.exports = router;
