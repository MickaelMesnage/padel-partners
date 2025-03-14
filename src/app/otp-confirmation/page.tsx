import { getEmailFromQueryParams } from "@/app/otp-confirmation/getEmailFromQueryParams";
import { OTPConfirmationFormContainer } from "@/app/otp-confirmation/OTPConfirmationFormContainer";
import { SearchParams } from "@/utils/SearchParams.type";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const email = await getEmailFromQueryParams(searchParams);

  return (
    <main>
      <h1>OTP Confirmation</h1>
      <OTPConfirmationFormContainer email={email} />
    </main>
  );
}
