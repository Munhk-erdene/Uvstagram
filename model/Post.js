import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userName: String,
  likes: Number,
  image: String,
  title: String,
  desp: String,
});
const Post = mongoose.model("Post", userSchema);
export default Post;
