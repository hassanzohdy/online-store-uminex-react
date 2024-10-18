import { trans } from "@mongez/localization";
import { IoCartOutline } from "react-icons/io5";

import { cartAtom } from "design-system/atoms/cart-atom";
import { modalAtom } from "design-system/atoms/model-atom";
import { Button } from "design-system/components/ui/button";
import { formatNumber, formatPrice } from "shared/lib/formats";

export default function CartSidebar() {
  const cart = cartAtom.useValue();

  const openSheet = () => {
    modalAtom.onOpen("cart");
  };

  return (
    <div className="flex items-center">
      <Button
        variant={"ghost"}
        className="hover:bg-transparent"
        onClick={openSheet}>
        <div className="relative">
          <IoCartOutline className="h-8 w-8 text-black" />
          <div
            className="absolute -top-1 -right-2 bg-rose-600 rounded-full 
                text-[5px] h-[16px] w-[17px] flex items-center justify-center">
            <span className="text-xs text-center text-slate-50 ">
              {formatNumber(cart.totals.quantity)}
            </span>
          </div>
        </div>
      </Button>
      <div className="hidden xl:flex flex-col items-start">
        <span className="text-xs text-slate-600">{trans("cart")}</span>
        <p className="text-sm font-semibold text-primary p-0">
          {formatPrice(cart.totals.subtotal)}
        </p>
      </div>
    </div>
  );
}
