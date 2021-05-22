import express from "express";

import {
  getPosts,
  getPostsBySearch,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts.js"; //! debo poner la extensión del archivo (.js) si o si en Node

const router = express.Router();
import auth from "../middleware/auth.js";

//localhost:5000/posts
router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
