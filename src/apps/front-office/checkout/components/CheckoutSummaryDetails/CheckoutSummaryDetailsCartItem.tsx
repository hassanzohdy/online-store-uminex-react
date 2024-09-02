import { trans } from "@mongez/localization";
import { current } from "@mongez/react";

import { currencyAtom } from "apps/front-office/design-system/atoms/currency-atom";
import { formatPrice } from "apps/front-office/design-system/lib/formats";
import { CartItemType } from "apps/front-office/design-system/utils/types";

interface CheckoutSummaryDetailsCartItemProps {
  item: CartItemType;
}

export default function CheckoutSummaryDetailsCartItem({
  item,
}: CheckoutSummaryDetailsCartItemProps) {
  const currentLanguage = current("localeCode");
  const currentCurrency = currencyAtom.useValue();

  return (
    <div className="flex items-center justify-between w-full gap-3">
      <div className="flex items-center gap-2">
        <div className="w-22 h-16 relative">
          <img
            src={item.product.images[0].url}
            alt={trans(
              item.product.name.find(
                name => name.localeCode === currentLanguage,
              )?.value || "",
            )}
            className="w-full h-full"
          />
          <div
            className="absolute -top-3 -right-3 w-6 h-6 bg-slate-800 opacity-50 text-white
           rounded-full flex items-center justify-center">
            {item.quantity}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="line-clamp-1">
            {trans(
              item.product.name.find(
                name => name.localeCode === currentLanguage,
              )?.value || "",
            )}
          </h1>
        </div>
      </div>
      <h1>{formatPrice(item.total.finalPrice, currentCurrency)}</h1>
    </div>
  );
}
