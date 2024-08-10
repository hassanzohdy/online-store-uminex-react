import { trans } from "@mongez/localization";
import { currencyAtom } from "apps/front-office/design-system/atoms/currency-atom";
import { Separator } from "apps/front-office/design-system/components/ui/separator";
import { useCart } from "apps/front-office/design-system/hooks/use-cart";
import { formatPrice } from "apps/front-office/design-system/lib/formats";
import { CartItemType } from "apps/front-office/design-system/utils/types";
import CheckoutSummaryDetailsCartItem from "./CheckoutSummaryDetailsCartItem";
import CheckoutSummaryDetailsLoadingComponent from "./CheckoutSummaryDetailsLoadingComponent";

const CheckoutSummaryDetails = () => {
  const currentCurrency = currencyAtom.value;
  const { data, isLoading, error } = useCart();

  if (isLoading) {
    return <CheckoutSummaryDetailsLoadingComponent />;
  }

  if (error) {
    return <div className="text-red-500">Error loading cart data.</div>;
  }

  if (data) {
    const { cart } = data;
    const { items } = cart;

    if (!items) {
      return null;
    }
    return (
      <div className="flex flex-col items-start w-full gap-3 max-w-[650px] px-4">
        {items.map((item: CartItemType) => (
          <CheckoutSummaryDetailsCartItem key={item.id} item={item} />
        ))}
        <Separator className="my-5" />
        <div className="flex items-center justify-between w-full">
          <h1 className="text-black text-lg">{trans("Subtotal")}</h1>
          <h1 className="text-black text-lg font-medium">
            {formatPrice(cart.totals.salePrice, currentCurrency)}
          </h1>
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-black text-2xl">{trans("Total")}</h1>
          <h1 className="text-black text-2xl">
            <span className="text-slate-700 text-sm font-normal mx-2">
              {currentCurrency}
            </span>
            {formatPrice(cart.totals.finalPrice, currentCurrency)}
          </h1>
        </div>
      </div>
    );
  }
};

export default CheckoutSummaryDetails;
