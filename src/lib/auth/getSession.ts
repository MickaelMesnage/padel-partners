import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { z } from "zod";

export const sessionSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return null;
  }

  const { error, data } = sessionSchema.safeParse(session.user);

  if (error) {
    console.error(error);
    throw new Error("Invalid session of authenticated user");
  }

  return data;
};
