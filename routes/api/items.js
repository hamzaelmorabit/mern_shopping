const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

router.get("/", async (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

router.post("/", async (req, res) => {
  const item = new Item({ ...req.body });
  item
    .save()
    .then((response) => res.status(201).json(item))
    // .then((response) => res.status(201).send(item))
    .catch((error) => res.status(400).send(error));
});

// @Route api/items/:id
// @desc Delete a  item
// @access public
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  Item.findById({ _id: id })
    .then((item) => item.remove())
    .then(() => res.status(201).json({ success: true }))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
