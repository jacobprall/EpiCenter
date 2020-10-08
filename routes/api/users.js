const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../models/User");
const Connection = require("../../models/Connection");
const user = require("./route_helpers/user");
require("../../config/passport")(passport);
const addConnectionsCallback = require("./route_helpers/connections/add");
// const getPending
const {
  registerCallback,
  loginCallback,
  currentUserCallback,
} = require("./route_helpers/user");

router.post("/register", (req, res) => registerCallback(req, res));
router.post("/login", (req, res) => loginCallback(req, res));
router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false,
  }),
  currentUserCallback
);

// get accepted connections
router.get("/connections", (req, res) => {
  User.findById(req.body.requester).then((user) =>
    res.json(user.connections)
  );
});

//get pending
router.get("/connections/pending", (req, res) => {
  User.findById(req.body.requester).then((user) => {
    console.log(user.connections)
    Connection.find({ id: { $in: user.connections } }).then((connections) => {
      res.json(connections);
    });
  });
});

//add connection
router.post("/connections", (req, res) => addConnectionsCallback(req, res));

// accept/decline connection

router.patch("/connections", (req, res) => {
  Connection.findById(req.body.current_user)
    .then((user) => {
      const accepted = req.accepted;
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
