import express from "express";
import {
  getAllPosts,
  createPost,
  post,
  updatePost,
  deletePost,
} from "../controller/post.js";

const routerPost = express.Router();
routerPost.get("/posts", getAllPosts);
routerPost.post("/posts", createPost);
routerPost.get("/posts/:id", post);
routerPost.put("/posts/:id", updatePost);
routerPost.delete("/posts/:id", deletePost);
export default routerPost;
