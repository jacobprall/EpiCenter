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
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    status: [
      {
        type: String,
        required: false,
      },
    ],
    connections: [
      {
        type: ObjectId,
        ref: "Connections",
      },
    ],
    updates: [
      {
        type: ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
