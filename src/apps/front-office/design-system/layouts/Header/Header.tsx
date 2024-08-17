import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { AiOutlineUser } from "react-icons/ai";
import Logo from "../../components/Logo";
import { useUser } from "../../hooks/useUser";
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
    return <div>Error: {error}</div>;
  }
  if (data) {
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
                <Link
                  href={URLS.auth.login}
                  className="flex items-center gap-2">
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
                <Link href={URLS.auth.root} className="flex items-center gap-2">
                  <AiOutlineUser className="h-8 w-8 text-primary" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-slate-600">{user.name}</span>
                    <p className="text-sm font-medium text-primary p-0">
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
};

export default Header;
