import { Role } from "@prisma/client";

export class User {
  id: number;
  name: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}
