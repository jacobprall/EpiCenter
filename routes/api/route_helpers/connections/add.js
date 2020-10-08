const User = require("../../../../models/User");
const Connection = require("../../../../models/Connection");

function checkForRequest(requester_id, requestee_id) {
  Connection.find({
    requester: requester_id,
    requestee: requestee_id,
  }).then((connection) => {
    if (connection.length !== 0) {
      return connection[0];
    } else {
      return true;
    }
  });
}

function addConnectionCallback(req, res) {
  User.findById(req.body.requester)
    .then((user) => {
      if (checkForRequest(user.id, req.body.requestee)) {
        const newConnection = new Connection({
          requester: user.id,
          requestee: req.body.requestee,
          family: req.body.family,
          accepted: false,
          pending: true,
        });
        user.connections.push(newConnection.id);
        user.save();
        return newConnection;
      } else {
        return check;
      }
    })
    .then((connection) => {
      if (connection) {
        User.findById(req.body.requestee).then((user) => {
          user.connections.push(connection.id);
          user.save();
          res.json(connection);
        });
      } else {
        res.json("already added");
      }
    });
}

module.exports = addConnectionCallback;
