import { getSession } from "@/lib/auth/getSession";

export const isUserAuthenticated = async () => {
  const session = await getSession();

  return !!session;
};
