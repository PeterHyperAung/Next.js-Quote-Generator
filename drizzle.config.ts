import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

console.log(
  "HELLO",
  process.env.DATABASE_URL?.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD as string
  ) as string
);

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL?.replace(
      "<PASSWORD>",
      process.env.DATABASE_PASSWORD as string
    ) as string,
  },
} satisfies Config;
