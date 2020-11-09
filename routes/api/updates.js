const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Update = require("../../models/Update");
const User = require("../../models/User");
const validateUpdateInput = require("../../validation/updates");

router.get("/", (req, res) => {
  const connections = User.find({ _id: req.id }).then((res) => res.connections);
  Update.find()
    .sort({ date: -1 })
    .then((updates) => res.json(updates))
    .catch((err) => res.status(404).json({ noPostsFound: "No Posts Found" }));
  console.log(connections);
});

router.get("/:user_id", (req, res) => {
  Update.find({ user: req.params.user_id })
    .then((updates) => {
      if (!updates.length) {
        res.json({ noPostsFound: "No posts found" });
      } else {
        res.json(updates);
      }
    })
    .catch((err) => res.status(404).json({ noPostsFound: "No posts found" }));
});

// router.get("/:id", (req, res) => {
//   Update.findById(req.params.id)
//     .then((update) => res.json(update))
//     .catch((err) =>
//       res.status(404).json({ nopostsfound: "No Post found with that ID" })
//     );
// });

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateUpdateInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newUpdate = new Update({
      user: req.user.id,
      status: req.body.status,
      last_test: req.body.last_test,
      next_test: req.body.next_test,
      text: req.body.text,
      date: req.body.date
    });

    newUpdate.save().then((update) => res.json(update));
  }
);

module.exports = router;
