const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: [true, "City Required"],
    },
    state: {
      type: String,
      required: [true, "State Required"],
    },
    age: {
      type: Number,
      required: [true, "Age Required"]
    },
    status: [
      {
        type: String,
        required: false,
      },
    ],
    last_test: {
      type: Date
    },
    connections: [
      {
        type: ObjectId,
        ref: "Connections",
      },
    ],
    updates: [
      {
        type: Object,
        ref: "Updates",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
