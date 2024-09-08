import { trans } from "@mongez/localization";
import { useUser } from "design-system/hooks/useUser";
import { LuLoader2 } from "react-icons/lu";
import AccountDetails from "./AccountDetails";

const AccountContainer = () => {
  const { data, isLoading, error } = useUser();

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <LuLoader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red text-lg font-semibold">
        Error: {error}
      </p>
    );
  }

  const user = data!;

  return (
    <div className="flex items-start flex-col gap-5 px-5">
      <div className="flex items-start gap-4 flex-col">
        <div className="flex items-center gap-2">
          {trans("welcomeBack", {
            name: (
              <h1 className="text-[15px] font-semibold text-slate-900">
                {user.name}
              </h1>
            ),
          })}
        </div>
      </div>
      <h1 className="text-lg font-semibold">{trans("Account Details")}: </h1>
      <AccountDetails user={user} />
    </div>
  );
};

export default AccountContainer;
