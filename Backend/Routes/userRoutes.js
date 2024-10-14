const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const verifyToken = require("../Utils/verify");

router.post("/login", userController.login);
router.get("/refresh", verifyToken, userController.resetToken);

module.exports = router;
