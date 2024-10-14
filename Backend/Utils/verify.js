const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (!req.header)
    return res.status(401).son({ message: "You are not authenticated!" });
  const authorizationHeader = req.headers["authorization"];

  if (!authorizationHeader || !authorizationHeader.startsWith(`Bearer `)) {
    return res.status(401).json({ message: "You are not authenticated!" });
  }

  const token =
    authorizationHeader.split(" ")[1] === "null"
      ? null
      : authorizationHeader.split(" ")[1];

  if (!token) {
    return res.status(404).json({ message: "Authorized Token Not Found" });
  }

  // Remove 'Bearer ' prefix
  try {
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET); // Replace with your actual secret key
    req.user = decodedUser; // Attach the decoded user to the request

    next();
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = verifyToken;
