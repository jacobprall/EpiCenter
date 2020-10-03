const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
require("../../config/passport")(passport);

const User = require("../../models/User");
const Connection = require("../../models/Connection");

router.get(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    User.find({ user: req.user.id }).then((user) => res.json(user.connections));
  }
);

// router.patch("/connections/create", (req, res) => {
//   User.find({ user: req.currentUser} ).then((user) => {
//     const newConnection = new Connection({
//       user_1: user.id,
//       user_2: req.user_id,
//       type: req.type,
//       accepted: false
//     })
//   })
// });

module.exports = router;
