import { z } from "zod";

export const otpConfirmationFormSchema = z.object({
  otp: z
    .string()
    .min(6, "Le code OTP doit contenir 6 chiffres")
    .max(6, "Le code OTP doit contenir 6 chiffres"),
});

export type OTPConfirmationFormValues = z.infer<
  typeof otpConfirmationFormSchema
>;
