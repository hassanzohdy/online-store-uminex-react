import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "apps/front-office/design-system/components/ui/sheet";
import EmptyWishList from "shared/assets/images/empty-wishlist.svg";
import WishlistItem from "../wishlist-item";

interface WishlistSidebarSheetProps {
  children: React.ReactNode;
  data: {
    products: any[];
  };
}
const WishListSheetSidebar = ({
  children,
  data,
}: WishlistSidebarSheetProps) => {
  const language = current("localeCode");

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className="p-0 w-full md:max-w-sm"
        side={language === "ar" ? "left" : "right"}>
        <SheetHeader className="bg-slate-100 p-3">
          <SheetTitle className="text-slate-900 font-semibold text-md">
            {trans("wishlist")}
          </SheetTitle>
        </SheetHeader>
        {data.products.length > 0 ? (
          data.products.map(product => (
            <WishlistItem key={product.id} wishlistItem={product} />
          ))
        ) : (
          <div className="flex items-center justify-center flex-col gap-5 py-5">
            <img src={EmptyWishList} alt="empty cart" />
            <p className="text-sm font-medium text-slate-800 ">
              {trans("emptyWishlist")}
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default WishListSheetSidebar;
