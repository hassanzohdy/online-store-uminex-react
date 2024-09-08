import { FaRegHeart } from "react-icons/fa";

import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlist-atom";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { useWishlist } from "apps/front-office/design-system/hooks/useWishlist";
import WishlistSidebar from "./wishlist-sidebar";

export default function WishlistSidebarContainer({
  navbar,
}: {
  navbar?: boolean;
}) {
  const { data, isLoading, error } = useWishlist();

  if (isLoading) {
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
