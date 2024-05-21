import db from "@/lib/db";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { insertUser } from "../../../../../db";
import { users } from "../../../../../db/schema";

export const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user.email && user.name) {
        const isUserInDB = await db
          .select({ email: users.email })
          .from(users)
          .where(eq(users.email, user.email));
        if (isUserInDB.length === 0) {
          await insertUser({
            name: user.name,
            email: user.email,
          });
        }
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
