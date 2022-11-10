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

  // likeComment: async (req, res) => {
  //   try {
      // let likedBy = Comment.likedBy
      // if(likedBy.includes(user) == false){
        // Comment.findOneAndUpdate({
        //   _id: req.params.id,
        //   user: req.user.id},
        //   { $inc: { likes: 1 },
        //   $push: { likedBy: req.user.id }
    // })
      // }
    //  else if(likedBy.includes(user) == true){
    //     Comment.findOneAndUpdate({
    //       _id: req.params.id,
    //       user: req.user.id,
    //       $inc: { likes: -1 },
    //       $splice: { likedBy: indexOf(user) },
    //   });
    // }
 
  //     console.log("Likes modified");
  //     res.redirect(`/profile`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
 
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
  let upComment = Comment.findOneAndUpdate(
    {
      $inc: { likes: 1 },
      $push: { likedBy: req.user.id }
    })

let downComment = Comment.findOneAndUpdate(
    {
      $inc: { likes: -1 },
      // get rid of the user name from the likedBy array.
    })


  try {
    await Comment.findOne(
      { likedBy: req.user.id }
     )

      
    console.log("Likes updated");
    res.redirect(`/profile`);
  } catch (err) {
    console.log(err);
    }
  }

// working to push name to array, infinite +1s
// likeComment: async (req, res) => {
//   try {
//     await Comment.findOneAndUpdate(
//       {
//         _id: req.params.id, 
//         user: req.user.id },
//       {
//         $inc: { likes: 1 },
//         $push: { likedBy: req.user.id }
//       }

//     );
    
//     console.log("Likes updated");
//     res.redirect(`/profile`);
//   } catch (err) {
//     console.log(err);
//     }
//   }

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

// working --> multiple
