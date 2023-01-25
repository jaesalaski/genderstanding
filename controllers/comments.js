const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");

module.exports = {

createComment: async (req, res) => {
  try {
    await Comment.create({
      comment: req.body.comment,
      likes: 0,
      likedBy: [],
      post: req.params.id,
      user: req.user.id,
    });
    console.log("Comment has been added!");
    res.redirect("/profile");
  } catch (err) {
    console.log(err);
  }
},
 
deleteComment: async (req, res) => {
  try {
    await Comment.deleteOne({ _id: req.params.id });
    console.log("Deleted Post");
    res.redirect("/profile");
  } catch (err) {
    res.redirect("/profile");
    }
<<<<<<< HEAD
  }
=======
  },

likeComment: async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    const index = comment.likedBy.indexOf(req.user.id);
    if(index > -1){
      comment.likedBy.splice(index, 1);
      comment.likes--;
    } else {
      comment.likedBy.push(req.user.id);
      comment.likes++;
    }
        await comment.save();
    
        console.log("Likes modified");
    res.redirect(`/profile`);
  } catch (err) {
    console.log(err);
    }
  },
>>>>>>> 6060f1574b59b71f446b9f82938358d5e98926a2
}