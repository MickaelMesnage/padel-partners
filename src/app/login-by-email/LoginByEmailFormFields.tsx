"use client";

import { LoginByEmailFormValues } from "@/app/login-by-email/loginByEmail.schema";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useFormContext } from "react-hook-form";

export const LoginByEmailFormFields = () => {
  const form = useFormContext<LoginByEmailFormValues>();

  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem className="text-start col-span-2 md:col-span-1">
          <FormLabel htmlFor={field.name}>Email</FormLabel>
          <FormControl>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="votre@email.com"
                className="pl-10"
                {...field}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
