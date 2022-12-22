import express from "express";
import mongoose, { mongo } from "mongoose";
import { port, mongo_uri } from "./config.js";
import router from "./router/user.js";
const app = express();
app.use(express.json());
app.use("/", router);
const connect = () => {
  try {
    mongoose.connect(mongo_uri, {}).then(() => {
      console.log("connected to DB");
    });
  } catch (error) {
    console.error("Could not connect to DB");
    process.exit(1);
  }
};

app.listen(port, async () => {
  connect();
  console.log(`app running ${port}`);
});
