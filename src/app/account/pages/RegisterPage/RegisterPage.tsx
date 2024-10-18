import RegisterForm from "app/account/pages/RegisterPage/components/RegisterForm";
import Breadcrumbs from "design-system/components/Breadcrumbs";

export default function RegisterPage() {
  return (
    <div className="bg-lightGray w-full">
      <div className="max-w-[1400px] mx-auto py-6 px-4 w-full flex flex-col gap-14">
        <Breadcrumbs title="register" />
        <div className="flex justify-center items-center">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
