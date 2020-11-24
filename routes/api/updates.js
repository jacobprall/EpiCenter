const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Update = require("../../models/Update");
const User = require("../../models/User");
const UpdateController = require('../../controllers/updateController')

// router.get("/", UpdateController.getFeed);
router.get("/:user_id", UpdateController.getUsersUpdates);
router.post("/", passport.authenticate("jwt", { session: false }), UpdateController.postUpdate);
router.delete("/:update_id", passport.authenticate("jwt", { session: false }), UpdateController.deleteUpdate)
module.exports = router;
