export const PATHS = {
  home: "/home",
  loginByEmail: "/login-by-email",
  otpConfirmation: ({ email }: { email: string }) => {
    const params = new URLSearchParams();
    params.set("email", email);
    return `/otp-confirmation?${params.toString()}`;
  },
};
