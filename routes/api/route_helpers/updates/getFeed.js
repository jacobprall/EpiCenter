const Update = require("../../../../models/Update");
const User = require("../../../../models/User");


const getFeed = (req, res) => {
  const connections = User.find({ _id: req.id }).then((res) => res.connections);
  Update.find()
    .sort({ date: -1 })
    .then((updates) => res.json(updates))
    .catch((err) => res.status(404).json({ noPostsFound: "No Posts Found" }));
  console.log(connections);
};

export default getFeed;