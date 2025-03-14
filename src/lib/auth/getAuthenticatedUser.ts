import { getSession } from "@/lib/auth/getSession";

export const getAuthenticatedUser = async () => {
  const session = await getSession();

  if (!session) {
    throw new Error("Session of authenticated user not found");
  }

  return session;
};
