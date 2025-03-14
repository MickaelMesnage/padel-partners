import { getAuthenticatedUser } from "@/lib/auth/getAuthenticatedUser";
import { createSafeActionClient } from "next-safe-action";

export const action = createSafeActionClient({});

export const authenticatedAction = action.use(async ({ next }) => {
  const user = await getAuthenticatedUser();
  return next({ ctx: { user } });
});
