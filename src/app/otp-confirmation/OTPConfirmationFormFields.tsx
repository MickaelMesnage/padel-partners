import { OTPConfirmationFormValues } from "@/app/otp-confirmation/otpConfirmationFormValidation";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useFormContext } from "react-hook-form";

export const OTPConfirmationFormFields = () => {
  const form = useFormContext<OTPConfirmationFormValues>();

  return (
    <FormField
      control={form.control}
      name="otp"
      render={({ field }) => (
        <FormItem className="text-start col-span-2 md:col-span-1">
          <FormLabel htmlFor={field.name}>Code OTP</FormLabel>
          <FormControl>
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
