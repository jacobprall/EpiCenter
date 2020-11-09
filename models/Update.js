const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UpdateSchema = new Schema({
  status: {
    type: String,
    required: true,
  },
  last_test: {
    type: Date,
    required: false,
  },
  last_test_result: {
    type: Boolean,
    required: false
  },
  next_test: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Update = mongoose.model("Update", UpdateSchema);
