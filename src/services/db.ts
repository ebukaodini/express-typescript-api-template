import { PrismaClient } from "@prisma/client";

export const connectDb = () => {
  const db = new PrismaClient(
    process.env.NODE_ENV! === "development" && {
      log: ["info", "query"],
    }
  );

  return db;
};
