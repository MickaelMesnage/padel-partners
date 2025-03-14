"use server";

import { checkUserAlreadyExist } from "@/server/user/checkUserAlreadyExist";

export const checkUserAlreadyExistAction = async ({
  email,
}: {
  email: string;
}) => {
  const userAlreadyExist = await checkUserAlreadyExist({ email });

  return userAlreadyExist;
};
