const Update = require("../../../../models/Update");
const User = require("../../../../models/User");


const getUsersUpdates = (req, res) => {
  Update.find({ user: req.params.user_id })
    .then((updates) => {
      if (!updates.length) {
        res.json({ noPostsFound: "No posts found" });
      } else {
        res.json(updates);
      }
    })
    .catch((err) => res.status(404).json({ noPostsFound: "No posts found" }));
};


export default getUsersUpdates;