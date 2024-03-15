import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { User } from "../entities/user.entity";

export class UserDto {
  @IsUUID("all", { message: "Invalid ID", groups: [] })
  id?: string;

  @IsString()
  @IsNotEmpty({ message: "Name is required", groups: ["create", "update"] })
  name: string;

  public static fromJson(data: { [key: string]: any }): UserDto {
    const user: UserDto = new UserDto();

    if (data?.id) user.id = data.id;
    if (data?.name) user.name = data.name;

    return user;
  }

  public static toJson(user: User): object {
    if (!user) {
      return;
    }

    return {
      id: user.id,
      name: user.name,
    };
  }

  public static toArray(users: User[]): object[] {
    return users.map((user) => this.toJson(user));
  }
}
