import { Link } from "@mongez/react-router";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { formatPrice } from "../../lib/formatPrice";
import Logo from "./components/Logo";
import SearchInput from "./components/search-input";
import CartSheetSidebar from "./components/sheets/cart-sidebar-sheet";
import MobileSidebarSheet from "./components/sheets/mobile-sidebar-sheet";
import WishListSheetSidebar from "./components/sheets/wishlist-sidebar-sheet";

export default function Header() {
  return (
    <div className="w-full py-6">
      <div className="w-full flex items-center justify-between">
        <MobileSidebarSheet />
        <Logo />
        <div className="w-[770px] hidden xl:block">
          <SearchInput />
        </div>
        <div className="flex items-center flex-wrap">
          <div className="hidden xl:flex items-center">
            <Link href="/account/login" className="flex items-center gap-2">
              <AiOutlineUser className="h-8 w-8 text-primary" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-slate-600">Login</span>
                <p className="text-sm font-medium text-primary p-0">
                  Account
                </p>
              </div>
            </Link>
            <WishListSheetSidebar>
              <Button variant={"ghost"} className="hover:bg-transparent">
                <div className="relative">
                  <FaRegHeart className="h-7 w-7 text-primary" />
                  <div
                    className="absolute -top-1 -right-2 bg-red rounded-full
                   w-[18px] h-[18px] flex items-center justify-center">
                    <span className="text-xs text-center text-slate-50">0</span>
                  </div>
                </div>
              </Button>
            </WishListSheetSidebar>
          </div>
          <div className="flex items-center">
            <CartSheetSidebar />
            <div className="hidden xl:flex flex-col items-start">
              <span className="text-xs text-slate-600">Cart</span>
              <p className="text-sm font-medium text-primary p-0">
                {formatPrice(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
