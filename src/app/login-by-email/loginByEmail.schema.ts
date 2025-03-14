import { z } from "zod";

export const loginByEmailFormSchema = z.object({
  email: z.string().email("Email invalide"),
});

export type LoginByEmailFormValues = z.infer<typeof loginByEmailFormSchema>;
