import { Request, Response } from "express";
import { UserRepo } from "../repos/user.repo";
import { UserDto } from "../dtos/user.dto";
import IResponse from "../interfaces/IResponse";

export class UserController {
  static async createUser(req: Request, res: Response): Promise<IResponse> {
    try {
      const data = UserDto.fromJson(req.body);
      const user = await UserRepo.create(data);
      return res.success("User created.", UserDto.toJson(user));
    } catch (error: any) {
      return res.error("User not created!", error.message);
    }
  }

  static async findAllUsers(req: Request, res: Response): Promise<IResponse> {
    try {
      const users = await UserRepo.findAll(); 
      return res.success("All users.", UserDto.toArray(users));
    } catch (error: any) {
      return res.error("Users not found!", error.message);
    }
  }

  static async findOneUser(req: Request, res: Response): Promise<IResponse> {
    try {
      const user = await UserRepo.findOne(req.params.userId);
      return res.success("User details.", UserDto.toJson(user));
    } catch (error: any) {
      return res.error("User not found!", error.message);
    }
  }

  static async updateUser(req: Request, res: Response): Promise<IResponse> {
    try {
      const data = UserDto.fromJson(req.body);
      const user = await UserRepo.update(req.params.userId, data);
      return res.success("User updated.", UserDto.toJson(user));
    } catch (error: any) {
      return res.error("User not updated!", error.message);
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<IResponse> {
    try {
      const user = await UserRepo.delete(req.params.userId);
      return res.success("User deleted.", UserDto.toJson(user));
    } catch (error: any) {
      return res.error("User not deleted!", error.message);
    }
  }
}
