import { faker } from "@faker-js/faker";
import { beforeEach, describe, expect, test } from "@jest/globals";
import { Context, createDbMock, MockContext } from "../prisma.config";
import { UserRepo } from "../../repos/user.repo";
import { Role } from "@prisma/client";

let mockDb: MockContext["prisma"];
let db: Context;

beforeEach(() => {
  mockDb = createDbMock().prisma;
  db = mockDb as unknown as Context;
});

const randomUser = () => {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    role: Role.USER,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

describe("User Repo", () => {
  test("should create new user", async () => {
    const user = randomUser();
    mockDb.users.create.mockResolvedValue(user);

    UserRepo.db = mockDb;
    await expect(UserRepo.create(user)).resolves.toEqual(user);
  });

  test("should get all users", async () => {
    const users = faker.helpers.multiple(randomUser, {
      count: 5,
    });
    mockDb.users.findMany.mockResolvedValue(users);

    UserRepo.db = mockDb;
    await expect(UserRepo.findAll()).resolves.toEqual(users);
  });

  test("should get one user", async () => {
    const user = randomUser();
    mockDb.users.findUnique.mockResolvedValue(user);

    UserRepo.db = mockDb;
    await expect(UserRepo.findOne(user.id)).resolves.toEqual(user);
  });

  test("should update a user", async () => {
    const user = randomUser();
    mockDb.users.update.mockResolvedValue(user);

    UserRepo.db = mockDb;
    await expect(UserRepo.update(user.id, user)).resolves.toEqual(user);
  });

  test("should delete a user", async () => {
    const user = randomUser();
    mockDb.users.delete.mockResolvedValue(user);

    UserRepo.db = mockDb;
    await expect(UserRepo.delete(user.id)).resolves.toEqual(user);
  });
});
