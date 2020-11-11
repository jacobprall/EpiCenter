const Update = require("../models/Update");
const User = require("../models/User");
const validateUpdateInput = require("../validation/updates");

// Create Update
exports.postUpdate = async (req, res) => {
  const { errors, isValid } = validateUpdateInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    const newUpdate = await Update.create(req.body);

    User.findById(req.user.id).then((user) => {
      user.updates.unshift(newUpdate);
      user.save();
    });
    res.json({ update: newUpdate });
  } catch (err) {
    res.json(err);
  }
};

// delete Update

exports.deleteUpdate = (req, res) => {
  // remove from user update array?
  Update.findById(req.params.update_id)
    .then((update) => update.deleteOne())
    .then(() => res.json({ status: "Deleted Update" }));
};

// Get Feed of Updates
exports.getFeed = (req, res) => {
  // const connections = User.find({ _id: req.id }).then((res) => res.connections);
  // Update.find() // check for connections
  //   .sort({ date: -1 })
  //   .then((updates) => res.json(updates))
  //   .catch((err) => res.status(404).json({ noPostsFound: "No Posts Found" }));
  // console.log(connections);
};

// Get specific users updates
exports.getUsersUpdates = (req, res) => {
  User.findById(req.params.user_id)
    .then((user) => res.json(user))
    // Update.find({ user: req.params.user_id })
    //   .then((updates) => {
    //     res.json(updates)
    //     if (updates.length === 0) {
    //       res.json({ noPostsFound: "No posts found" });
    //     } else {
    //       res.json(updates);
    //     }
    //   })
    .catch((err) => res.status(404).json({ noPostsFound: "No posts found" }));
};
