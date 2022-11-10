
const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  likes: {
    type: Number,
    required: false,
    ref: "User"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Like", LikeSchema);