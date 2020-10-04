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

const Connection = require("../../models/Connection");

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
    console.log(req.body);
    User.findById(req.body.current_user).then((user) => res.json(user));
  }
);

//get pending
router.get("/connections/pending", (req, res) => {
  User.findById(req.body.current_user).then((user) => {
    const pending = user.connections.filter((connection) => {
      return connection.pending;
    });
    res.json(pending);
  });
});

//add connection
router.post("/connections", (req, res) => {
  User.findById(req.body.current_user)
    .then((user) => {
      const newConnection = new Connection({
        user: req.body.user_id,
        family: req.body.family,
        accepted: false,
        pending: true,
      });
      user.connections.push(newConnection);
      user.save();
      return newConnection;
    })
    .then((connection) => {
      User.findById(req.body.user_id).then((user) => {
        user.connections.push(connection);
        user.save();
        res.json("pending");
      });
    });
});

// accept/decline connection

router.patch("/connections", (req, res) => {
  User.findById(req.body.current_user)
    .then((user) => {
      // const connection = user.connections.filter((connection) => {
      //   return connection.user === req.body.user_id;
      // });
      // connection[0].pending = false;
      // connection[0].accepted = req.body.accepted
      // Need to find element, remove it from array, modify it and add it back to array
    })
    .then(() => {
      User.findById(req.body.user_id).then((user) => {
        const targetUserPending = user.pending;
      });
    });
  res.json("complete");
});

//accept conneciton

module.exports = router;
