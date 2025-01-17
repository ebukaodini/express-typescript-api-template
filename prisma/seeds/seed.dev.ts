import { PrismaClient, Role } from "@prisma/client";
import { faker } from "@faker-js/faker";

const db = new PrismaClient();
const users = [
  {
    id: 1,
    name: faker.person.fullName(),
    role: Role.ADMIN,
  },
  {
    id: 2,
    name: faker.person.fullName(),
    role: Role.USER,
  },
];

async function main() {
  try {
    // seed users
    users.forEach(async (user) => {
      await db.users.upsert({
        create: {
          id: user.id,
          name: user.name,
          role: user.role,
        },
        where: { id: user.id },
        update: {
          name: user.name,
          role: user.role,
        },
      });
    });
  } catch (error) {
    console.error(error);
    await db.$disconnect();
  } finally {
    await db.$disconnect();
    console.log("Database seeded successfully!");
  }
}

main();
