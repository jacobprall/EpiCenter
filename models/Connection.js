const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
  user_1: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  user_2: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  accepted: {
    type: Boolean
  }
});

module.exports = Connection = mongoose.model("Connection", ConnectionSchema);

// Needed?