import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import { port, mongo_uri } from "./config.js";

import router from "./router/user.js";
import routerPost from "./router/post.js";
const app = express();
const corsOption = {
  origin: "http://localhost:3000",
  optionSuccesStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());
app.use("/", router);
app.use("/posts", routerPost);

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
