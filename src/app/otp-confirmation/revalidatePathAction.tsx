"use server";

import { authenticatedAction } from "@/lib/action/safeActionClient";
import { revalidatePath } from "next/cache";

export const revalidatePathAction = authenticatedAction.action(async () => {
  await revalidatePath("/");
});
