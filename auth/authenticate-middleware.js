const jwt = require("jsonwebtoken");

// Enable .env
require("dotenv").config();

// Restricted middleware ⚔
module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "no no no" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "nope buddy" });
  }
};
