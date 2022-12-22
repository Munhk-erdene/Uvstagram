import express from "express";
import {
  getAllUsers,
  createUser,
  user,
  updateUser,
  deleteUser,
} from "../controller/user.js";

const router = express.Router();
router.get("/users", getAllUsers);
router.post("/users", createUser);
router.get("/users/:id", user);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
export default router;
