import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isLTR } from "app/utils/helpers";
import URLS from "app/utils/urls";
import { AiOutlineUser } from "react-icons/ai";
import parseError from "../../../utils/parse-error";
import Logo from "../../components/Logo";
import { useUser } from "../../hooks/useUser";
import { cn } from "../../lib/utils";
import CartSidebar from "./components/cart/cart-sidebar";
import SearchInput from "./components/search/search-input";
import MobileSidebarSheet from "./components/sheets/mobile-sidebar-sheet";
import SkeletonHeaderLoading from "./components/SkeletonLoading/skeleton-header";
import WishlistSidebarContainer from "./components/wishlist/wishlist-sidebar-container";

const Header = () => {
  const { data, isLoading, error } = useUser();
  if (isLoading) {
    return <SkeletonHeaderLoading />;
  }

  if (error) {
    return <div>Error: {parseError(error)}</div>;
  }

  const user = data!;

  return (
    <div className="w-full py-5">
      <div className="w-full flex items-center justify-between gap-5">
        <MobileSidebarSheet user={user} />
        <Logo />
        <div
          className={cn(
            "lg:w-[570px] xl:w-[730px] 2xl:w-[770px] hidden lg:block",
            isLTR() ? "lg:mz-auto xl:ml-auto" : "mr-auto",
          )}>
          <SearchInput />
        </div>
        <div className="flex items-center flex-wrap 2xl:ml-5">
          <div className="hidden lg:flex items-center">
            {user.userType === "guest" && (
              <Link href={URLS.auth.login} className="flex items-center gap-2">
                <AiOutlineUser className="h-7 w-7 text-primary" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-slate-600">
                    {trans("login")}
                  </span>
                  <p className="text-sm font-semibold text-primary p-0">
                    {trans("account")}
                  </p>
                </div>
              </Link>
            )}
            {user && user.userType === "user" && (
              <Link href={URLS.auth.root} className="flex items-center gap-2">
                <AiOutlineUser className="h-7 w-7 text-primary" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-slate-600 p-0">
                    {user.name}
                  </span>
                  <p className="text-sm font-semibold text-primary p-0">
                    {trans("account")}
                  </p>
                </div>
              </Link>
            )}
            <div className="hidden xl:block"></div>
            <WishlistSidebarContainer />
          </div>
          <CartSidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;
