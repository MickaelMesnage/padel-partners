import { PATHS } from "@/PATHS";
import { LoginButton } from "@/components/layout/Header/LoginButton";
import { LogoutButton } from "@/components/layout/Header/LogoutButton";
import { isUserAuthenticated } from "@/lib/auth/isUserAuthenticated";
import { Trophy } from "lucide-react";
import Link from "next/link";

export const Header = async () => {
  const isAuthenticated = await isUserAuthenticated();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={PATHS.home}
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <Trophy className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">I love padel</span>
          </Link>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </header>
  );
};
