import { trans } from "@mongez/localization";
import router, { Link } from "@mongez/react-router";
import { AiOutlineUser } from "react-icons/ai";

import { isLTR } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import parseError from "../../../utils/parse-error";
import Logo from "../../components/Logo";
import { useUser } from "../../hooks/useUser";
import { cn } from "../../lib/utils";
import CartSidebar from "./components/cart/cart-sidebar";
import SearchInput from "./components/search/search-input";
import MobileSidebarSheet from "./components/sheets/mobile-sidebar-sheet";
import SkeletonHeaderLoading from "./components/SkeletonLoading/skeleton-header";
import WishlistSidebarContainer from "./components/wishlist/wishlist-sidebar-container";

export default function Header() {
  const { data, isLoading, error } = useUser();

  if (isLoading) {
    return <SkeletonHeaderLoading />;
  }

  if (error) {
    return <div>Error: {parseError(error)}</div>;
  }

  const user = data!;
  const currentPath = router.activeRoute?.path;

  return (
    <div className="w-full py-5">
      <div className="w-full flex items-center justify-between gap-5">
        <MobileSidebarSheet user={user} />
        <Logo />
        <div
          className={cn(
            "lg:w-[530px] xl:w-[750px] 2xl:w-[800px] hidden lg:block",
            isLTR() ? "ml-14" : "mr-auto",
          )}>
          <SearchInput />
        </div>
        <div className="flex items-center flex-wrap 2xl:ml-5">
          <div className="hidden lg:flex items-center">
            {user.userType === "guest" && (
              <Link
                href={
                  user.userType === "guest"
                    ? URLS.auth.viewLogin(currentPath!)
                    : URLS.auth.root
                }
                className="flex items-center gap-2">
                <AiOutlineUser className="h-7 w-7 text-primary" />
                <div className="flex flex-col items-start">
                  {user.userType === "guest" ? (
                    <span className="text-xs text-slate-600">
                      {trans("login")}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-600 p-0">
                      {user.name}
                    </span>
                  )}
                  <p className="text-sm font-semibold text-primary p-0">
                    {trans("account")}
                  </p>
                </div>
              </Link>
            )}
            <WishlistSidebarContainer />
          </div>
          <CartSidebar />
        </div>
      </div>
    </div>
  );
}
