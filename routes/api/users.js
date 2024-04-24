const express = require("express");
const router = express.Router();
const users = require("../../Users");

// get all users
router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  let found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user found for ${req.params.id}` });
  }
});

module.exports = router;