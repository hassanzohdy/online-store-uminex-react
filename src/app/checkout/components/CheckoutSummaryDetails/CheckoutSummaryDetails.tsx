import { trans } from "@mongez/localization";
import { useEffect, useState } from "react";

import { cartAtom } from "design-system/atoms/cart-atom";
import { currencyAtom } from "design-system/atoms/currency-atom";
import { Separator } from "design-system/components/ui/separator";
import { formatPrice } from "shared/lib/formats";
import { CartItemType } from "shared/utils/types";
import CheckoutSummaryDetailsCartItem from "./CheckoutSummaryDetailsCartItem";
import CheckoutSummaryDetailsLoadingComponent from "./CheckoutSummaryDetailsLoadingComponent";

export default function CheckoutSummaryDetails() {
  const currentCurrency = currencyAtom.useValue();
  const cart = cartAtom.value;

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for demonstration (remove or adjust this for real data fetching)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate a 2 second delay

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <CheckoutSummaryDetailsLoadingComponent />;
  }

  if (cart) {
    const { items } = cart;

    if (!items) {
      return null;
    }

    return (
      <div className="flex flex-col items-start w-full gap-3 max-w-[650px] px-4 sticky top-[50px]">
        {items.map((item: CartItemType) => (
          <CheckoutSummaryDetailsCartItem key={item.id} item={item} />
        ))}
        <Separator className="my-5" />
        <div className="flex items-center justify-between w-full">
          <h1 className="text-black text-md">{trans("Subtotal")}</h1>
          <h1 className="text-black text-md">
            {formatPrice(cart.totals.salePrice)}
          </h1>
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-black text-lg font-medium">{trans("Total")}</h1>
          <h1 className="text-black text-lg font-medium">
            <span className="text-slate-700 text-sm font-normal mx-2">
              {currentCurrency}
            </span>
            {formatPrice(cart.totals.finalPrice ?? 0)}
          </h1>
        </div>
      </div>
    );
  }

  return null;
}
