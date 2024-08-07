import { trans } from "@mongez/localization";
import { cartAtom } from "apps/front-office/design-system/atoms/cart-atom";
import { currencyAtom } from "apps/front-office/design-system/atoms/currency-atom";
import { formatPrice } from "apps/front-office/design-system/lib/formats";
import { useState } from "react";
import CartSheetSidebar from "../sheets/cart-sidebar-sheet";

const CartContainer = () => {
  const [_, setTick] = useState(0);
  const cart = cartAtom.useValue();
  const currentCurrency = currencyAtom.useValue();
  const changeTicks = (tick: number) => {
    setTick(tick);
  };

  return (
    <div className="flex items-center">
      <CartSheetSidebar changeTicks={changeTicks} />
      <div className="hidden xl:flex flex-col items-start">
        <span className="text-xs text-slate-600">{trans("cart")}</span>
        <p className="text-sm font-medium text-primary p-0">
          {formatPrice(cart.totals ? cart.totals.subtotal : 0, currentCurrency)}
        </p>
      </div>
    </div>
  );
};

export default CartContainer;
