const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
  requester_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  requestee_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  family: {
    type: Boolean,
    required: [true, "Select Family or Friend"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  pending: {
    type: Boolean,
    default: true,
  },
});

module.exports = Connection = mongoose.model("Connection", ConnectionSchema);

// Needed?
