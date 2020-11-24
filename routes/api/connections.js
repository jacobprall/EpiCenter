const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
require("../../config/passport")(passport);
const addConnectionsCallback = require("./route_helpers/connections/addConnectionCallback");
const User = require("../../models/User");
const Connection = require("../../models/Connection");
const ConnectionController = require("../../controllers/connectionController");

router.get(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  ConnectionController.getConnections
);

// get pending connections
router.get(
  "/pending",
  passport.authenticate("jwt", {
    session: false,
  }),
  ConnectionController.getPendingConnections
);

//add connection
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  ConnectionController.addConnection
);

// accept connection (refactor)

// decline connection

router.delete(
  "/:connection_id",
  passport.authenticate("jwt", { session: false }),
  ConnectionController.removeConnection
);

// router.patch("/connections", (req, res) => {
//   Connection.findById(req.body.current_user)
//     .then((user) => {
//       const accepted = req.accepted;
//     })
//     .then(() => {
//       User.findById(req.body.user_id).then((user) => {
//         const targetUserPending = user.pending;
//       });
//     });
//   res.json("complete");
// });

module.exports = router;
