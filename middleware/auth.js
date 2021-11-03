const jwt = require("jsonwebtoken");
const config = require("./../config/keys");
const { JWT_SECRET } = config;
const User = require("../models/User");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  console.log("Auth middleware");
  if (!token) return res.status(401).send("No token, autorization denied");
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(500).send({ error: " Token is not valid" });
  }
}
module.exports = auth;
