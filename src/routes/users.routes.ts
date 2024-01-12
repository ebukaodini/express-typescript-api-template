import express from "express";
import { UserController } from "../controllers/user.controller";
import { UserDto } from "../dtos/user.dto";
import { validator } from "../middlewares";
import { ValidationGroup } from "../enums/ValidationGroup";

const router = express.Router();

router.post(
  "/users",
  validator(UserDto, ValidationGroup.CREATE),
  UserController.createUser
);
router.get("/users", UserController.findAllUsers);
router.get("/users/:userId", UserController.findOneUser);
router.patch(
  "/users/:userId",
  validator(UserDto, ValidationGroup.UPDATE),
  UserController.updateUser
);
router.delete("/users/:userId", UserController.removeUser);

export default router;
