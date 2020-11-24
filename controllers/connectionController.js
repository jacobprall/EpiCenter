const User = require("../models/User");
const Connection = require("../models/Connection");

exports.addConnection = async (req, res) => {
  try {
    const existingConnectionSearch = await Connection.find({ requester_id: req.user.id, requestee_id: req.body.requestee }).exec();
    if (existingConnectionSearch.length > 1) return res.json({message: "User already added"})
    const newConnection = new Connection({
      requester_id: req.user.id,
      requestee_id: req.body.requestee,
      family: req.body.family,
    });
    const requestee = await User.findByIdAndUpdate(
      req.body.requestee,
      { $addToSet: { connections: [newConnection] } },
      { new: true },
      (err, doc) => {
        if (err) console.log(err);
        else {
          res.send(doc);
        }
      }
    );
    const requester = await User.findByIdAndUpdate(
      req.user.id,
      { $addToSet: { connections: [newConnection] } },
      (err, doc) => {
        if (err) console.log(err);
        else {
          res.send(doc)
        }
      }
    );
    await newConnection.save();
    res.json({ requester, requestee });
  } catch (err) {
    res.json(err.message);
  }
};

exports.getConnections = async (req, res) => {
  const user = await User.findById(req.user.id).lean();
  const accepted = user.connections.filter(
    (connection) => connection.pending === false
  );
  res.json(accepted);
};

exports.getPendingConnections = async (req, res) => {
  const user = await User.findById(req.user.id).lean();
  const pending = user.connections.filter(
    (connection) => connection.pending === true
  );
  res.json(pending);
};

exports.removeConnection = async (req, res) => {
  const user = await User.findById(req.user.id)
  // const other_user = await User.findById(req.body.user_id)
  const connection = await Connection.findById(req.params.connection_id);
  // const connection_id = connection._id;
  res.json(connection);
}

// function checkForRequest (user, target) {
//   const connections1 = user.connections;
//   const connections2 = target.connections;
//   const connections = new Set();
//   connections1.forEach((ele) => connections.add(ele));
//   connections2.forEach((ele) => connections.add(ele));
//   if (connections.size < connections1.length + connections2.length) {
//     return false;
//   } else {
//     return true;
//   }
// }

// async function addConnectionCallback(req, res) {
//   const target = await User.findById(req.body.target);
//   User.findById(req.user.id)
//     .then((user) => {
//       if (checkForRequest(user, target)) {
//         const newConnection = new Connection({
//           family: req.body.family,
//           pending: true,
//         });
//         user.connections.push(newConnection.id);
//         target.connections.push(newConnection.id);
//         user.save();
//         target.save();
//         newConnection.save();
//         return newConnection;
//       } else {
//         return false;
//       }
//     })
//     .then((connection) => {
//       if (connection) {
//         res.json("Connection Added")
//       } else {
//         res.json("Connection exists or is pending");
//       }
//     }).catch(err => res.json(err));
// }

// module.exports = addConnectionCallback;
