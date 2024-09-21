import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";

import { isRTL } from "app/utils/helpers";
import URLS from "app/utils/urls";
import { cartAtom } from "design-system/atoms/cart-atom";
import { modalAtom } from "design-system/atoms/model-atom";
import { Button } from "design-system/components/ui/button";
import { Separator } from "design-system/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "design-system/components/ui/sheet";
import { formatPrice } from "design-system/lib/formats";
import { useState } from "react";
import EmptyCartIcon from "shared/assets/images/empty-cart.svg";
import CartItem from "../cart/cart-item";

export default function CartSheetSidebar() {
  const [_, setTick] = useState(0);

  const data = modalAtom.useValue();
  const cart = cartAtom.useValue();

  const changeQuantity = () => {
    setTick(prev => prev + 1);
  };

  const isModalOpen = data.isOpen && data.type === "cart";
  if (!isModalOpen) {
    return null;
  }

  const handleClose = () => {
    modalAtom.onClose();
  };

  const items = cart.items;

  return (
    <Sheet open={data.isOpen} onOpenChange={handleClose}>
      <SheetContent
        className="p-0 w-full md:max-w-sm overflow-y-auto overflow-x-hidden scrollbar"
        side={isRTL() ? "left" : "right"}>
        <SheetHeader className="bg-lightGray p-3">
          <SheetTitle className="text-slate-900 font-semibold text-md">
            {trans("shoppingCart")}
          </SheetTitle>
        </SheetHeader>
        {items && items.length > 0 ? (
          <div className="w-full">
            <div className="h-[600px] overflow-y-auto w-full flex flex-col items-start gap-4 p-5 scrollbar">
              {items.map(cartItem => (
                <div
                  key={cartItem.id}
                  className=" flex flex-col items-start gap-4 ">
                  <CartItem
                    cartItem={cartItem}
                    changeQuantity={changeQuantity}
                  />
                  <Separator />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 p-5 w-full bg-lightGray flex flex-col items-start gap-4">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-xs font-semibold text-black">
                  {trans("Subtotal")}:
                </h1>
                <p className="text-base text-red font-semibold">
                  {formatPrice(cart.totals.subtotal || 0)}
                </p>
              </div>
              <Button
                asChild
                variant={"outline"}
                className="w-full rounded-full p-6"
                onClick={handleClose}>
                <Link href={URLS.cart}>{trans("ViewCart")}</Link>
              </Button>
              <Button
                asChild
                variant={"primary"}
                className="w-full rounded-full p-6"
                onClick={handleClose}>
                <Link href={URLS.checkout}>{trans("CheckOut")}</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col gap-5 py-5">
            <img src={EmptyCartIcon} alt="empty cart" />
            <p className="text-sm font-semibold text-black ">
              {trans("emptyCart")}
            </p>
            <Button
              asChild
              variant={"primary"}
              size={"lg"}
              className="rounded-full"
              onClick={handleClose}>
              <Link to={URLS.collections}>{trans("emptyCartBtn")}</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
