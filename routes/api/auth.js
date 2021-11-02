const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("./../../config/keys");

const { JWT_SECRET } = config;
// Item Model
const User = require("../../models/User");

router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send({ msg: "User Does not exist" });

  const userSearch = await User.findOne({ email });
  if (!userSearch) return res.status(400).send({ msg: "User Does not exist" });

  const isMatch = await bcrypt.compare(password, userSearch.password);
  if (!isMatch) return res.status(400).send({ msg: "Invalid credentials" });

  const token = jwt.sign({ _id: userSearch._id.toString() }, JWT_SECRET);
  console.log(userSearch);

//   userSearch["token"] = token;
//   console.log(userSearch);
  await userSearch.save();
  res.send({ userSearch, token });
});

module.exports = router;
