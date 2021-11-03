const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("./../../config/keys");
const auth = require("./../../middleware/auth");

const { JWT_SECRET } = config;
// Item Model
const User = require("../../models/User");

router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send({ msg: "User Does not exist" });

  const user = await User.findOne({ email });
  if (!user) return res.status(400).send({ msg: "User Does not exist" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send({ msg: "Invalid credentials" });

  const token = jwt.sign({ _id: user._id.toString() }, JWT_SECRET);
  console.log(user);

  //   user["token"] = token;
  //   console.log(user);
  await user.save();
  res.send({ user, token });
});

router.get("/auth", auth, async (req, res) => {
  try {
    // console.log(req.user._id);
    const user = await User.findById(req.user._id);
    // .select("-password");
    // console.log(user);

    if (!user) throw Error("User does not exist");
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
