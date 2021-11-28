const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("./../../config/keys");

const { JWT_SECRET } = config;
// Item Model
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const items = await User.find();
    if (!items) throw Error("No items");

    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post("/", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    // res.send({ error: "Insert all fields" });
    res.status(400).send({ error: "Insert all fields" });
  }

  const user_ = new User({ ...req.body });
  const hashPwd = await bcrypt.hash(user_.password, 8);
  user_["password"] = hashPwd.toString();

  const token = jwt.sign({ _id: user_._id.toString() }, JWT_SECRET);
  user_["token"] = token;
  user_
    .save()
    .then((user) => {
      res.status(201).json({ user: { name, email }, token });
    })
    .catch((error) => res.status(400).send(error));
});

module.exports = router;
