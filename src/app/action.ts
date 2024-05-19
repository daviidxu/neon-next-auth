"use server";

import db from "@/lib";
import { users } from "../../db/schema";
import { ActionResult } from "./page";

export const addUser = async (prevState: any, formData: FormData) => {
  try {
    const test = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };
    await db
      .insert(users)
      .values({ name: test.name, email: test.email })
      .returning({ insertedId: users.id });
    return { message: "Utilisateur ajouté avec succès", code: 200 };
  } catch (error: unknown) {
    return {
      message: "Impossible d'ajouter un utilisateur",
      code: (error as ActionResult).code,
    };
  }
};
