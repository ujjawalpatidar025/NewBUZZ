const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const connection = require("./Utils/DB");
const cors = require("cors");

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*", // replace with your frontend domain
  })
);

//Connecting to the Data
connection();

//public routes
app.get("/", (req, res) => {
  return res.send("Server is runnig fine");
});
//Admin Routes
app.use("/api/admin", require("./Admin/Admin_routes/adminRoutes"));

// Root route
app.use("/api/user", require("./Routes/userRoutes"));

// Start the server
const port = process.env.PORT || 3000; // Use the PORT from the .env file or default to 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
