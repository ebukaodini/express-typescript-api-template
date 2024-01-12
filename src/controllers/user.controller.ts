import { Request, Response } from "express";
import { UserRepo } from "../repos/user.repo";
import { UserDto } from "../dtos/user.dto";

export class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const data = UserDto.fromJson(req.body);
      const user = await UserRepo.create(data);
      return res.success("User created.", user);
    } catch (error: any) {
      throw error;
    }
  }

  static findAllUsers(req: Request, res: Response) {
    try {
      return res.success(UserRepo.findAll());
    } catch (error: any) {
      throw error;
    }
  }

  static findOneUser(req: Request, res: Response) {
    try {
      return res.success(UserRepo.findOne(req.params.userId));
    } catch (error: any) {
      throw error;
    }
  }

  static updateUser(req: Request, res: Response) {
    try {
      const data = UserDto.fromJson(req.body);
      return res.success(UserRepo.update(req.params.userId, data));
    } catch (error: any) {
      throw error;
    }
  }

  static removeUser(req: Request, res: Response) {
    try {
      return res.success(UserRepo.remove(req.params.userId));
    } catch (error: any) {
      throw error;
    }
  }
}
