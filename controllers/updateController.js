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
    const newUpdate = await Update.create(Object.assign(req.body, {user_id: req.user.id}));
    const user = await User.findById(req.user.id);
    user.updates.unshift(newUpdate);
    await user.save();
    res.json({ newUpdate });
  } catch (err) {
    res.json(err);
  }
};

// delete Update

exports.deleteUpdate = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const oldUpdate = await Update.findById(req.params.update_id);
    // remove from user array
    const newUpdates = user.updates.filter((update) => {
      return String(update._id) !== String(oldUpdate._id);
    });
    user.updates = newUpdates;
    await Update.deleteOne({ _id: oldUpdate._id });
    await user.save();
    res.json({ oldUpdate });
  } catch (err) {
    res.json(err)
  }
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
    .then((user) => res.json(user.updates))
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
