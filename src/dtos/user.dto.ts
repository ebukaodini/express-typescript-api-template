import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { User } from "../entities/user.entity";
import { Role } from "@prisma/client";

export class UserDto {
  @IsNumber({}, { message: "Invalid ID", groups: [] })
  id?: number;

  @IsString()
  @IsNotEmpty({ message: "Name is required", groups: ["create", "update"] })
  name: string;

  role: Role;
  createdAt: Date;
  updatedAt: Date;

  public static fromJson(data: { [key: string]: any }): UserDto {
    const user: UserDto = new UserDto();

    if (data?.id) user.id = data.id;
    if (data?.name) user.name = data.name;
    if (data.role) user.role = data.role;
    if (data.createdAt) user.createdAt = data.createdAt;
    if (data.updatedAt) user.updatedAt = data.updatedAt;

    return user;
  }

  public static toJson(user: User): object {
    if (!user) {
      return;
    }

    return {
      id: user.id,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  public static toArray(users: User[]): object[] {
    return users.map((user) => this.toJson(user));
  }
}
