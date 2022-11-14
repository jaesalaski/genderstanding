const Post = require("../models/Post");
const Comment = require("../models/Comment");

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
    // Find post by id
    let comment = await Comment.findById({ _id: req.params.id });
    await Comment.deleteOne({ _id: req.params.id });
    console.log("Deleted Post");
    res.redirect("/profile");
  } catch (err) {
    res.redirect("/profile");
    }
  },

 likeComment: async (req, res) => {
    try {
      await Comment.findOneAndUpdate(
        {
          _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/profile`);
    } catch (err) {
      console.log(err);
    }
  },
}
//   deletePost: async (req, res) => {
//     try {
//       // Find post by id
//       let post = await Post.findById({ _id: req.params.id });
//       // Delete image from cloudinary
//       await cloudinary.uploader.destroy(post.cloudinaryId);
//       // Delete post from db
//       await Post.remove({ _id: req.params.id });
//       console.log("Deleted Post");
//       res.redirect("/profile");
//     } catch (err) {
//       res.redirect("/profile");

  // getComment : async (req, res) => {
  //   try {
  //     const posts = await Post.find({ user: req.user.id });
  //     const comments = await Comment.find({ post: req.params.id }).sort({ createdAt: "desc" }).lean();
  //     res.render("profile.ejs", { posts: posts, user: req.user, comments: comments });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
