import ResetPasswordForm from "app/account/pages/ResetPasswordPage/components/ResetPasswordForm";
import Breadcrumbs from "design-system/components/Breadcrumbs";

export default function ResetPasswordPage() {
  return (
    <div className="bg-lightGray w-full">
      <div className="max-w-[1400px] mx-auto py-6 px-4 w-full flex flex-col gap-14">
        <Breadcrumbs title="resetPassword" />
        <div className="flex justify-center items-center">
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
}
