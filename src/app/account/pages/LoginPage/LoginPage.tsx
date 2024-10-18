import LoginForm from "app/account/pages/LoginPage/components/LoginForm";
import Breadcrumbs from "design-system/components/Breadcrumbs";

export default function LoginPage() {
  return (
    <div className="bg-lightGray w-full">
      <div className="max-w-[1400px] mx-auto py-6 px-4 w-full flex flex-col gap-14">
        <Breadcrumbs title="login" />
        <div className="flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
