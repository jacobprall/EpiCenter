const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../models/User");
const user = require("./route_helpers/user");
require("../../config/passport")(passport);

const {
  registerCallback,
  loginCallback,
  currentUserCallback,
} = require("./route_helpers/user");

// const User = require("../../models/User");

router.post("/register", (req, res) => registerCallback(req, res));
router.post("/login", (req, res) => loginCallback(req, res));
router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false,
  }),
  currentUserCallback
);

// get connections

router.get(
  "/connections",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    User.find({ user: req.user.id }).then((user) => res.json(user.connections));
  }
);

//get pending
router.get(
  "/connections/pending",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    User.find({ user: req.user.id }).then((user) => res.json(user.pending));
  }
);

//add connection



router.patch("/connections", (req, res) => {
  User.findById(req.body.current_user).then((user) => {
    const currentUserPending = user.pending;
    if (!currentUserPending.includes(req.body.user_id)) {
      user.pending.push(req.body.user_id);
    }
    user.save()
  }).then(() => {
    User.findById(req.body.user_id).then((user) => {
      const targetUserPending = user.pending
    })
  });
  res.json("complete");
});

//accept conneciton

module.exports = router;
