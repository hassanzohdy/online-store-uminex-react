import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { useState } from "react";

import { isRTL } from "app/utils/helpers";
import URLS from "app/utils/urls";
import { modalAtom } from "design-system/atoms/model-atom";
import { wishlistAtom } from "design-system/atoms/wishlist-atom";
import { Button } from "design-system/components/ui/button";
import { Separator } from "design-system/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "design-system/components/ui/sheet";
import EmptyWishList from "shared/assets/images/empty-wishlist.svg";
import WishlistItem from "./wishlist-item";

export default function WishListSheetSidebar() {
  const [status, setStatus] = useState(false);

  const data = modalAtom.useValue();
  const wishlist = wishlistAtom.useValue();

  const isModalOpen = data.isOpen && data.type === "wishlist";
  if (!isModalOpen) {
    return null;
  }

  const changeStatus = () => {
    setStatus(!status);
  };

  const handleClose = () => {
    modalAtom.onClose();
  };

  return (
    <Sheet open={data.isOpen} onOpenChange={handleClose}>
      <SheetContent
        className="p-2 w-full md:max-w-sm"
        side={isRTL() ? "left" : "right"}>
        <SheetHeader className="bg-lightGray p-3">
          <SheetTitle className="text-slate-900 font-semibold text-md">
            {trans("wishlist")}
          </SheetTitle>
        </SheetHeader>
        {wishlist && wishlist.products.length > 0 ? (
          <>
            {wishlist.products.map(product => (
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
              className="h-12 text-sm rounded-full w-full"
              onClick={handleClose}>
              <Link href={URLS.wishlist}>{trans("View Wishlist")}</Link>
            </Button>
          </>
        ) : (
          <div className="flex items-center justify-center flex-col gap-5 py-5">
            <img src={EmptyWishList} alt="empty cart" loading="lazy" />
            <p className="text-sm font-semibold text-black ">
              {trans("emptyWishlist")}
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
