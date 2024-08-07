import { trans } from "@mongez/localization";
import { preload } from "@mongez/react-utils";
import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlist-atom";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { formatNumber } from "apps/front-office/design-system/lib/formats";
import { getWishlist } from "apps/front-office/design-system/services/wishlist-services";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import WishListSheetSidebar from "../sheets/wishlist-sidebar-sheet";

interface WishlistSidebarProps {
  navbar?: boolean;
}

const WishlistSidebar = ({ navbar }: WishlistSidebarProps) => {
  const wishlist = wishlistAtom.useValue();
  const [status, setStatus] = useState(false);

  const changeStatus = () => {
    setStatus(!status);
  };

  if (navbar) {
    return (
      <WishListSheetSidebar data={wishlist} changeStatus={changeStatus}>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <FaRegHeart className="w-4 h-4" />
          </div>
          <h1 className="text-[14px] font-medium text-slate-900">
            {trans("wishlist")} ( {formatNumber(wishlist.totalWishlist)} )
          </h1>
        </div>
      </WishListSheetSidebar>
    );
  }
  
  return (
    <>
      <div className="flex items-center">
        <WishListSheetSidebar data={wishlist} changeStatus={changeStatus}>
          <Button variant={"ghost"} className="hover:bg-transparent">
            <div className="relative">
              <FaRegHeart className="h-7 w-7 text-primary" />
              {wishlist.totalWishlist > 0 && (
                <div
                  className="absolute -top-1 -right-2 bg-red rounded-full
                w-[18px] h-[18px] flex items-center justify-center">
                  <span className="text-xs text-center text-slate-50">
                    {formatNumber(wishlist.totalWishlist)}
                  </span>
                </div>
              )}
            </div>
          </Button>
        </WishListSheetSidebar>
      </div>
    </>
  );
};

export default WishlistSidebar;
