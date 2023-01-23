const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Commment Routes

//to be used later
// router.get("/:id", ensureAuth, postsController.getProfile);

router.post("/createComment/:id", commentsController.createComment);

router.put("/likeComment/:id", commentsController.likeComment);

router.delete("/deleteComment/:id", commentsController.deleteComment);

module.exports = router;