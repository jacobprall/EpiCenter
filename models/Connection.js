const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
  family: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  pending: {
    type: Boolean,
  },
});

module.exports = Connection = mongoose.model("Connection", ConnectionSchema);

// Needed?
