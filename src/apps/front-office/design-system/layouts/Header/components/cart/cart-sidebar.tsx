import { trans } from "@mongez/localization";
import { useState } from "react";

import { cartAtom } from "design-system/atoms/cart-atom";
import { formatPrice } from "design-system/lib/formats";
import CartSheetSidebar from "../sheets/cart-sidebar-sheet";

export default function CartSidebar() {
  const cart = cartAtom.useValue();
  const [_, setTick] = useState(0);

  const changeTicks = () => {
    setTick(prev => prev + 1);
  };

  return (
    <div className="flex items-center">
      <CartSheetSidebar changeTicks={changeTicks} />
      <div className="hidden xl:flex flex-col items-start">
        <span className="text-xs text-slate-600">{trans("cart")}</span>
        <p className="text-sm font-semibold text-primary p-0">
          {formatPrice(cart.totals ? cart.totals.subtotal : 0)}
        </p>
      </div>
    </div>
  );
}
