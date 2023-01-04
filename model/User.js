import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "name ee ug"],
  },
  lastName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  likes: Number,
  image: String,
  title: String,
  desp: String,
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "sigma", "betch"],
      message: "uur gender songo",
    },
  },
});
userSchema.path("firstName").validate((firstName) => {
  return !/[0-9]/.test(firstName);
}, "ner dotor too yvj bnaa");
userSchema.path("lastName").validate((lastName) => {
  return !/[0-9]/.test(lastName);
}, "ner dotor too yvj bnaa");
const User = mongoose.model("User", userSchema);

export default User;
