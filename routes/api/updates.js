const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Update = require("../../models/Update");
const validateUpdateInput = require("../../validation/updates");

router.get("/", (req, res) => {
  Update.find()
    .sort({ date: -1 })
    .then((updates) => res.json(updates))
    .catch((err) => res.status(404).json({ nopostsfound: "No Posts Found" }));
});

router.get("/user/:user_id", (req, res) => {
  Update.find({ user: req.params.user_id })
    .then((updates) => res.json(updates))
    .catch((err) => res.status(404).json({ noPostsFound: "No posts found" }));
});

router.get("/:id", (req, res) => {
  Update.findById(req.params.id)
    .then((update) => res.json(update))
    .catch((err) =>
      res.status(404).json({ nopostsfound: "No Post found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateUpdateInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newUpdate = new Update({
      text: req.body.text,
      user: req.user.id,
    });

    newUpdate.save().then((update) => res.json(update));
  }
);

module.exports = router;
