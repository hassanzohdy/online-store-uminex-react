import { trans } from "@mongez/localization";
import user from "app/account/user";
import AccountDetails from "./AccountDetails";

export default function AccountContainer() {
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
      <AccountDetails />
    </div>
  );
}
