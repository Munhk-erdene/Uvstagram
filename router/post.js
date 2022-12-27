import express from "express";
import {
  getAllPosts,
  createPost,
  post,
  updatePost,
  deletePost,
} from "../controller/post.js";

const routerPost = express.Router();
routerPost.get("/", getAllPosts);
routerPost.post("/", createPost);
routerPost.get("/:id", post);
routerPost.put("/:id", updatePost);
routerPost.delete("/:id", deletePost);
export default routerPost;
