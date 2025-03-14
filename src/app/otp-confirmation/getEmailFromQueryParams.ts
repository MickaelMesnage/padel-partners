import { SearchParams } from "@/utils/SearchParams.type";

export const getEmailFromQueryParams = async (searchParams: SearchParams) => {
  const params = await searchParams;
  const email = params?.email;

  if (typeof email !== "string") {
    throw new Error("Query param email is required");
  }

  return email;
};
