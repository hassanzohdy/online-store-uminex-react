import VerifyEmailForm from "app/account/pages/VerifyEmailPage/components/VerifyEmailForm";
import Breadcrumbs from "design-system/components/Breadcrumbs";

export default function VerifyEmailPage() {
  return (
    <div className="bg-lightGray w-full">
      <div className="max-w-[1400px] mx-auto py-6 px-4 w-full flex flex-col gap-14">
        <Breadcrumbs title="Verify Email" />
        <div className="flex justify-center items-center">
          <VerifyEmailForm />
        </div>
      </div>
    </div>
  );
}
