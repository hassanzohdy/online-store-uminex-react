import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { preload } from "@mongez/react-utils";
import { getMe } from "apps/front-office/account/service/auth";
import { AiOutlineUser } from "react-icons/ai";
import CartSidebar from "./components/cart-sidebar";
import Logo from "./components/Logo";
import SearchInput from "./components/search-input";
import MobileSidebarSheet from "./components/sheets/mobile-sidebar-sheet";
import WishlistSidebar from "./components/wishlist-sidebar";
interface HeaderProps {
  data;
}

const _Header: React.FC<HeaderProps> = ({ data }: HeaderProps) => {
  const { user } = data;

  return (
    <div className="w-full py-6">
      <div className="w-full flex items-center justify-between">
        <MobileSidebarSheet user={user} />
        <Logo />
        <div className="w-[770px] hidden xl:block">
          <SearchInput />
        </div>
        <div className="flex items-center flex-wrap">
          <div className="hidden xl:flex items-center">
            {user.userType === "guest" && (
              <Link href="/account/login" className="flex items-center gap-2">
                <AiOutlineUser className="h-8 w-8 text-primary" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-slate-600">
                    {trans("login")}
                  </span>
                  <p className="text-sm font-medium text-primary p-0">
                    {trans("account")}
                  </p>
                </div>
              </Link>
            )}
            {user && user.userType === "user" && (
              <Link href="/account/:id" className="flex items-center gap-2">
                <AiOutlineUser className="h-8 w-8 text-primary" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-slate-600">{user.name}</span>
                  <p className="text-sm font-medium text-primary p-0">
                    {trans("account")}
                  </p>
                </div>
              </Link>
            )}

            <WishlistSidebar />
          </div>
          <CartSidebar />
        </div>
      </div>
    </div>
  );
};

const Header = preload(_Header, getMe);

export default Header;
