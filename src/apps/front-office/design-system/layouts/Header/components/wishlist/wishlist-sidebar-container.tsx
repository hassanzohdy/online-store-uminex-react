import { wishlistAtom } from "design-system/atoms/wishlist-atom";
import { Button } from "design-system/components/ui/button";
import { useWishlist } from "design-system/hooks/useWishlist";
import { FaRegHeart } from "react-icons/fa";
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
