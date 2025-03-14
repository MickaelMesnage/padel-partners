"use client";

import { OTPConfirmationFormFields } from "@/app/otp-confirmation/OTPConfirmationFormFields";
import {
  otpConfirmationFormSchema,
  OTPConfirmationFormValues,
} from "@/app/otp-confirmation/otpConfirmationFormValidation";
import { revalidatePathAction } from "@/app/otp-confirmation/revalidatePathAction";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { authClient } from "@/lib/auth/auth-client";
import { PATHS } from "@/PATHS";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { FormProvider, useForm } from "react-hook-form";

type OTPConfirmationFormContainerProps = {
  email: string;
};

export const OTPConfirmationFormContainer = ({
  email,
}: OTPConfirmationFormContainerProps) => {
  const router = useRouter();
  const { toast } = useToast();

  const [pending, startTransition] = useTransition();

  const form = useForm<OTPConfirmationFormValues>({
    resolver: zodResolver(otpConfirmationFormSchema),
    defaultValues: {
      otp: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = async ({ otp }: OTPConfirmationFormValues) => {
    startTransition(async () => {
      try {
        const { error } = await authClient.signIn.emailOtp({
          email,
          otp,
        });
        if (error) {
          throw new Error(error.message);
        }
        toast({
          description: "Vous êtes maintenant connecté",
        });
        await revalidatePathAction();
        router.push(PATHS.home);
      } catch {
        toast({
          variant: "destructive",
          description: "Le code OTP n'est pas valide",
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
      <FormProvider {...form}>
        <OTPConfirmationFormFields />
        <Button className="w-full" type="submit" disabled={pending}>
          <LogIn className="mr-2 h-4 w-4" />
          Se connecter
        </Button>
      </FormProvider>
    </form>
  );
};
