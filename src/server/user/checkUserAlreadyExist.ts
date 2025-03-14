import prisma from "@/lib/prisma/prisma";

export const checkUserAlreadyExist = async ({ email }: { email: string }) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return !!user;
};
