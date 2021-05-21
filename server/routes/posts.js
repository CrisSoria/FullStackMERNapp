import express from "express";

import { getPosts, createPost } from "../controllers/posts.js"; //! debo poner la extensión del archivo (.js) si o si en Node

const router = express.Router();

//localhost:500/posts
router.get("/", getPosts);
router.post("/", createPost);

export default router;
