import { UserDto } from "../dtos/user.dto";
import { User } from "../entities/user.entity";
import { connectDb } from "../services/db";

export class UserRepo {
  static db = connectDb();

  static async create(user: UserDto): Promise<User> {
    try {
      return await this.db.users.create({
        data: user,
      });
    } catch (error: any) {
      throw error;
    }
  }

  static async findAll(): Promise<User[]> {
    try {
      return await this.db.users.findMany();
    } catch (error: any) {
      throw error;
    }
  }

  static async findOne(userId: User["id"]): Promise<User> {
    try {
      return await this.db.users.findUnique({ where: { id: userId } });
    } catch (error: any) {
      throw error;
    }
  }

  static async update(userId: User["id"], user: UserDto): Promise<User> {
    try {
      return await this.db.users.update({ data: user, where: { id: userId } });
    } catch (error: any) {
      throw error;
    }
  }

  static async delete(userId: User["id"]): Promise<User> {
    try {
      return await this.db.users.delete({ where: { id: userId } });
    } catch (error: any) {
      throw error;
    }
  }
}
