import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userName: String,
  likes: Number,
  image: String,
  title: String,
  desp: String,
});
const User = mongoose.model("User", userSchema);
export default User;
