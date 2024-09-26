import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { AiOutlineUser } from "react-icons/ai";

import { isLTR } from "app/utils/helpers";
import { cn } from "design-system/lib/utils";
import URLS from "app/utils/urls";
import user from "user";
import Logo from "../../components/Logo";
import CartSidebar from "./components/cart/cart-sidebar";
import SearchInput from "./components/search/search-input";
import MobileSidebarSheet from "./components/sheets/mobile-sidebar-sheet";
import WishlistSidebar from "./components/wishlist/wishlist-sidebar";

export default function Header() {
  return (
    <div className="w-full py-5">
      <div className="w-full flex items-center justify-between gap-5">
        <MobileSidebarSheet />
        <Logo />
        <div
          className={cn(
            "w-full xl:w-[700px] 2xl:w-[800px] hidden lg:block",
            isLTR() ? "ml-14" : "mr-auto",
          )}>
          <SearchInput />
        </div>
        <div className="flex items-center flex-wrap 2xl:ml-5 lg:min-w-[300px]">
          <div className="hidden lg:flex items-center">
            <Link
              href={user.isGuest() ? URLS.auth.login : URLS.auth.root}
              className="flex items-center gap-2">
              <AiOutlineUser className="h-7 w-7 text-primary" />
              <div className="flex flex-col items-start">
                {user.isGuest() ? (
                  <span className="text-xs text-slate-600">
                    {trans("login")}
                  </span>
                ) : (
                  <span className="text-xs text-slate-600 p-0">
                    {user.get("name")}
                  </span>
                )}
                <p className="text-sm font-semibold text-primary p-0">
                  {trans("account")}
                </p>
              </div>
            </Link>
            <WishlistSidebar />
          </div>
          <CartSidebar />
        </div>
      </div>
    </div>
  );
}

