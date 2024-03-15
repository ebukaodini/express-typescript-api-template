import express from "express";
import { UserController } from "../controllers/user.controller";
import { UserDto } from "../dtos/user.dto";
import { validator } from "../middlewares";

const userRoutes = express.Router();

userRoutes.post(
  "/users",
  validator(UserDto, "create"),
  UserController.createUser
);
userRoutes.get("/users", UserController.findAllUsers);
userRoutes.get("/users/:userId", UserController.findOneUser);
userRoutes.patch(
  "/users/:userId",
  validator(UserDto, "update"),
  UserController.updateUser
);
userRoutes.delete("/users/:userId", UserController.deleteUser);

export default userRoutes;
