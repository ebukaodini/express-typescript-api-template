import { UserDto } from "../dtos/user.dto";

export class UserRepo {
  static async create(user: UserDto) {
    try {
      return `This action created a user - ${user.name}`;
    } catch (error: any) {
      throw error;
    }
  }

  static findAll() {
    try {
      return `This action returns all users`;
    } catch (error: any) {
      throw error;
    }
  }

  static findOne(id: number) {
    try {
      return `This action returns a #${id} user`;
    } catch (error: any) {
      throw error;
    }
  }

  static update(id: number, _user: any) {
    try {
      return `This action updates a #${id} user`;
    } catch (error: any) {
      throw error;
    }
  }

  static remove(id: number) {
    try {
      return `This action removes a #${id} user`;
    } catch (error: any) {
      throw error;
    }
  }
}
