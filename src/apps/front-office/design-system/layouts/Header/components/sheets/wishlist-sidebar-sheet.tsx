import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Link } from "@mongez/react-router";
import { isRTL } from "app/utils/helpers";
import URLS from "app/utils/urls";
import { Button } from "design-system/components/ui/button";
import { Separator } from "design-system/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "design-system/components/ui/sheet";
import { Product } from "design-system/utils/types";
import EmptyWishList from "shared/assets/images/empty-wishlist.svg";
import WishlistItem from "../wishlist/wishlist-item";

interface WishlistSidebarSheetProps {
  children: React.ReactNode;
  data: {
    products: Product[];
  };
  changeStatus: () => void;
}

export default function WishListSheetSidebar({
  children,
  data,
  changeStatus,
}: WishlistSidebarSheetProps) {
  // const language = current("localeCode");

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className="p-2 w-full md:max-w-sm"
        side={isRTL() ? "left" : "right"}>
        <SheetHeader className="bg-slate-100 p-3">
          <SheetTitle className="text-slate-900 font-semibold text-md">
            {trans("wishlist")}
          </SheetTitle>
        </SheetHeader>
        {data && data.products.length > 0 ? (
          <>
            {data.products.map(product => (
              <div
                className="flex items-start gap-5 flex-col p-5"
                key={product.id}>
                <WishlistItem
                  wishlistItem={product}
                  changeStatus={changeStatus}
                />
                <Separator className="my-2" />
              </div>
            ))}
            <Button
              variant={"primary"}
              size={"lg"}
              className="h-12 text-sm rounded-full w-full">
              <Link href={URLS.wishlist}>{trans("View Wishlist")}</Link>
            </Button>
          </>
        ) : (
          <div className="flex items-center justify-center flex-col gap-5 py-5">
            <img src={EmptyWishList} alt="empty cart" />
            <p className="text-sm font-semibold text-black ">
              {trans("emptyWishlist")}
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
