const User = require("../../../../models/User");
// const Connection = require("../../../../models/Connection");

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
