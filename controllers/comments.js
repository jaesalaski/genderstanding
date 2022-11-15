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

//working

// likeComment: async (req, res) => {
// try {
//   await Comment.findOneAndUpdate(       
//     {
//       _id: req.params.id },
//     {
//       $push: { likedBy: req.user.id },
//       $inc: { likes: 1 },
//     }
//   );
//   console.log("Likes +1");
//   res.redirect(`/profile`);
// } catch (err) {
//   console.log(err);
//   }
// },

  //not working switch
  // likeComment: async (req, res) => {
  //   try {
  //     await Comment.findOneAndUpdate({ _id: req.params.id },
  //         { $switch: {
  //           branches: [
  //             {case: {$in: {likedBy: req.user.id}}, then: {$inc: {likes: -1}}},
  //             {$pull: {likedBy: req.user.id}},
  //           ],
  //           default:  {$push: {likedBy: req.user.id}, 
  //                     $inc: {likes: 1}}
  //     }
  //   }
  //       );
  //     console.log("Likes +1");
  //     res.redirect(`/profile`);
    
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },

// const comment = await Comment.findById(req.params.id);

// const index = comment.likedby.indexOf(req.user.id);
// if(index > -1){
//   comment.likedby.splice(index, 1);
//   comment.likes--;
// } else {
//   comment.likedby.push(req.user.id);
//   comment.likes++;
// }

// await comment.save();