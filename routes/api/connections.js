const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
require("../../config/passport")(passport);
const addConnectionsCallback = require("./route_helpers/connections/addConnectionCallback");
const User = require("../../models/User");
const Connection = require("../../models/Connection");

router.get(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    User.findById(req.user.id)
    .then((user) => {
      const connectionIds = user.connections;
      // query database for users with the connection Ids
      res.json(user)
    });
  }
);

//add connection
router.post("/", passport.authenticate("jwt", { session: false }),
  (req, res) => addConnectionsCallback(req, res));

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

// get accepted connections (refactor)
router.get("/connections", (req, res) => {
  User.findById(req.body.requester).then((user) =>
    res.json(user.connections)
  );
});

//get pending (refactor)
router.get("/connections/pending", (req, res) => {
  User.findById(req.body.requester).then((user) => {
    console.log(user.connections)
    Connection.find({ id: { $in: user.connections } }).then((connections) => {
      res.json(connections);
    });
  });
});


// accept/decline connection (refactor)

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


module.exports = router;
