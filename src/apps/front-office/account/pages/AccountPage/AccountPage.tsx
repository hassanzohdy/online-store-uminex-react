import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Separator } from "design-system/components/ui/separator";
import AccountContainer from "../../components/account/AccountContainer";
import AccountSidebar from "../../components/account/AccountSidebar";

export default function AccountPage() {
  return (
    <div className="px-4">
      <Helmet title="Account Page" />
      <div
        className="w-full max-w-[1450px] mx-auto md:px-4 py-8 my-10 bg-white rounded-lg
        flex flex-col items-center justify-center gap-5">
        <h1 className="text-[45px] text-center font-normal">
          {trans("account")}
        </h1>
        <Separator className="h-[2px]" />
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-5">
          <div className="col-span-1">
            <AccountSidebar />
          </div>
          <div className="col-span-1 md:col-span-3">
            <AccountContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
