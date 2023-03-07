const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: false,
    ref: "User"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likedBy: {
    type: [],
    ref: "User",
  }
});

module.exports = mongoose.model("Post", PostSchema);
