import { trans } from "@mongez/localization";
import { FaRegHeart } from "react-icons/fa";

import { modalAtom } from "design-system/atoms/model-atom";
import { wishlistAtom } from "design-system/atoms/wishlist-atom";
import { Button } from "design-system/components/ui/button";
import { formatNumber } from "shared/lib/formats";

interface WishlistSidebarProps {
  navbar?: boolean;
}

export default function WishlistSidebar({ navbar }: WishlistSidebarProps) {
  const wishlist = wishlistAtom.useValue();

  const openSheet = () => {
    modalAtom.onOpen("wishlist");
  };

  if (navbar) {
    return (
      <div className="flex items-center gap-1" onClick={openSheet}>
        <div className="flex items-center gap-2">
          <FaRegHeart className="w-4 h-4" />
        </div>
        <h1 className="text-[14px] font-semibold text-primary">
          {trans("wishlist")} ({" "}
          {formatNumber(wishlist && wishlist.totalWishlist)} )
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center" onClick={openSheet}>
        <Button variant={"ghost"} className="hover:bg-transparent">
          <div className="relative">
            <FaRegHeart className="h-7 w-7 text-primary" />
            {wishlist.totalWishlist > 0 && (
              <div
                className="absolute -top-1 -right-2 bg-rose-600 rounded-full text-[5px] h-[16px] w-[17px]
                 flex items-center justify-center">
                <span className="text-xs text-center text-slate-50">
                  {formatNumber(wishlist && wishlist.totalWishlist)}
                </span>
              </div>
            )}
          </div>
        </Button>
      </div>
    </>
  );
}
