"use client";

import { logoutAction } from "@/components/layout/Header/logoutAction";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
import { PATHS } from "@/PATHS";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const LogoutButton = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onClick = async () => {
    startTransition(async () => {
      await authClient.signOut();
      await logoutAction();
      router.push(PATHS.home);
    });
  };

  return (
    <Button disabled={isPending} onClick={onClick} variant="outline">
      Se déconnecter
    </Button>
  );
};
