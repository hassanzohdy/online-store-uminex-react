import { trans } from "@mongez/localization";
import { FaRegHeart } from "react-icons/fa";

import { wishlistAtom } from "design-system/atoms/wishlist-atom";
import { Button } from "design-system/components/ui/button";
import { useWishlist } from "design-system/hooks/useWishlist";
import { formatNumber } from "design-system/lib/formats";
import WishlistSidebar from "./wishlist-sidebar";

export default function WishlistSidebarContainer({
  navbar,
}: {
  navbar?: boolean;
}) {
  const { data, isLoading, error } = useWishlist();

  if (isLoading) {
    if (navbar) {
      return (
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <FaRegHeart className="w-4 h-4" />
          </div>
          <h1 className="text-[14px] font-semibold text-primary">
            {trans("wishlist")} ( {formatNumber(9)} )
          </h1>
        </div>
      );
    }
    return (
      <Button variant={"ghost"} className="hover:bg-transparent">
        <div className="relative">
          <FaRegHeart className="h-8 w-8 text-slate-700" />
        </div>
      </Button>
    );
  }

  if (error) {
    return (
      <Button variant={"ghost"} className="hover:bg-transparent">
        <div className="relative">
          <FaRegHeart className="h-8 w-8 text-slate-700" />
        </div>
      </Button>
    );
  }

  if (data) {
    wishlistAtom.update(data);
    return <WishlistSidebar navbar={navbar} />;
  }
}
