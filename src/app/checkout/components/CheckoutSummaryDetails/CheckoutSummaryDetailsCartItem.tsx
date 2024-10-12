import { currencyAtom } from "design-system/atoms/currency-atom";
import { formatPrice } from "shared/lib/formats";
import { translateText } from "shared/utils/translate-text";
import { CartItemType } from "shared/utils/types";

interface CheckoutSummaryDetailsCartItemProps {
  item: CartItemType;
}

export default function CheckoutSummaryDetailsCartItem({
  item,
}: CheckoutSummaryDetailsCartItemProps) {
  const currentCurrency = currencyAtom.useValue();

  return (
    <div className="flex items-center justify-between w-full gap-3">
      <div className="flex items-center gap-2">
        <div className="w-22 h-16 relative">
          <img
            src={item.product.images[0].url}
            alt={translateText(item.product.name)}
            className="w-full h-full"
            loading="lazy"
          />
          <div
            className="absolute -top-3 -right-3 w-6 h-6 bg-slate-800 opacity-50 text-white
           rounded-full flex items-center justify-center">
            {item.quantity}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="line-clamp-1">{translateText(item.product.name)}</h1>
        </div>
      </div>
      <h1>{formatPrice(item.total.finalPrice, currentCurrency)}</h1>
    </div>
  );
}
