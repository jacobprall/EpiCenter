const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../models/User");
const Connection = require("../../models/Connection");
const user = require("./route_helpers/user");
require("../../config/passport")(passport);


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




module.exports = router;
