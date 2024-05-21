import db from "@/lib/db";
import { users } from "./schema";

export const insertUser = async (data: { name: string; email: string }) => {
  await db.insert(users).values(data);
};
