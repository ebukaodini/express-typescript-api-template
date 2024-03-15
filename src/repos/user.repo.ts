import { UserDto } from "../dtos/user.dto";
import { User } from "../entities/user.entity";

export class UserRepo {
  static async create(user: UserDto): Promise<User> {
    try {
      return {id: "", name: ""};
    } catch (error: any) {
      throw error;
    }
  }

  static async findAll(): Promise<User[]> {
    try {
      return [{id: "", name: ""}];
    } catch (error: any) {
      throw error;
    }
  }

  static async findOne(userId: User["id"]): Promise<User> {
    try {
      return {id: "", name: ""};
    } catch (error: any) {
      throw error;
    }
  }

  static async update(userId: User["id"], user: UserDto): Promise<User> {
    try {
      return {id: "", name: ""};
    } catch (error: any) {
      throw error;
    }
  }

  static async delete(userId: User["id"]): Promise<User> {
    try {
      return {id: "", name: ""};
    } catch (error: any) {
      throw error;
    }
  }
}
