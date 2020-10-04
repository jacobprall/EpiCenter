const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  family: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  accepted: {
    type: Boolean,
  },
  pending: {
    type: Boolean,
  },
});

module.exports = Connection = mongoose.model("Connection", ConnectionSchema);

// Needed?
