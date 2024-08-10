import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Link } from "@mongez/react-router";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { Separator } from "apps/front-office/design-system/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "apps/front-office/design-system/components/ui/sheet";
import { Product } from "apps/front-office/design-system/utils/types";
import URLS from "apps/front-office/utils/urls";
import EmptyWishList from "shared/assets/images/empty-wishlist.svg";
import WishlistItem from "../wishlist/wishlist-item";

interface WishlistSidebarSheetProps {
  children: React.ReactNode;
  data: {
    products: Product[];
  };
  changeStatus?: () => void;
}
const WishListSheetSidebar = ({
  children,
  data,
  changeStatus,
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
        {data && data.products.length > 0 ? (
          data.products.map(product => (
            <div
              className="flex items-start gap-5 flex-col p-5"
              key={product.id}>
              <WishlistItem
                wishlistItem={product}
                changeStatus={changeStatus}
              />
              <Separator className="my-2" />
              <Button
                variant={"primary"}
                size={"lg"}
                className="h-12 text-md w-full rounded-full">
                <Link href={URLS.wishlist}>{trans("View Wishlist")}</Link>
              </Button>
            </div>
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
