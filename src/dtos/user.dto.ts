import { IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { User } from "../entities/user.entity";

export class UserDto {
  @IsUUID("all", { message: "Invalid ID", groups: ["update"] })
  id?: string;

  @IsString()
  @IsNotEmpty({ message: "Name is required", groups: ["create", "update"] })
  name: string;

  @IsString()
  @IsEmail({}, { message: "Email is invalid", groups: ["create", "update"] })
  @IsNotEmpty({ message: "Email is required", groups: ["create", "update"] })
  email: string;

  public static fromJson(data: { [key: string]: any }): UserDto {
    const user: UserDto = new UserDto();

    if (data?.id) user.id = data.id;
    if (data?.name) user.name = data.name;
    if (data?.email) user.email = data.email;

    return user;
  }

  public static toJson(user: User): object | null {
    if (!user) {
      return null;
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
