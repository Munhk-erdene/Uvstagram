import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  likes: Number,
  image: String,
  backgroundImage: String,
  tags: Array,
  title: {
    type: String,
    maxlength: [20, "heterhi ih useg bna max ni 10"],
  },
  desp: String,
});
userSchema.path("title").validate((title) => {
  return !/[0-9]/.test(title);
}, "title dotor too yvj bnaa");
const Post = mongoose.model("Post", userSchema);
export default Post;
