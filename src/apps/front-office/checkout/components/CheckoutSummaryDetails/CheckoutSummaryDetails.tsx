import { trans } from "@mongez/localization";
import { navigateTo } from "@mongez/react-router";
import { currencyAtom } from "apps/front-office/design-system/atoms/currency-atom";
import { Separator } from "apps/front-office/design-system/components/ui/separator";
import { useCart } from "apps/front-office/design-system/hooks/useCart";
import { formatPrice } from "apps/front-office/design-system/lib/formats";
import { CartItemType } from "apps/front-office/design-system/utils/types";
import parseError from "apps/front-office/utils/parse-error";
import URLS from "apps/front-office/utils/urls";
import CheckoutSummaryDetailsCartItem from "./CheckoutSummaryDetailsCartItem";
import CheckoutSummaryDetailsLoadingComponent from "./CheckoutSummaryDetailsLoadingComponent";

const CheckoutSummaryDetails = () => {
  const currentCurrency = currencyAtom.useValue();
  const { data, isLoading, error } = useCart();

  if (isLoading) {
    return <CheckoutSummaryDetailsLoadingComponent />;
  }

  if (error) {
    return <div className="text-red-500">Error {parseError(error)}.</div>;
  }

  if (data) {
    const { items } = data;

    if (!items) {
      return navigateTo(URLS.home);
    }

    return (
      <div className="flex flex-col items-start w-full gap-3 max-w-[650px] px-4  fixed top-[100px]">
        {items.map((item: CartItemType) => (
          <CheckoutSummaryDetailsCartItem key={item.id} item={item} />
        ))}
        <Separator className="my-5" />
        <div className="flex items-center justify-between w-full">
          <h1 className="text-black text-lg">{trans("Subtotal")}</h1>
          <h1 className="text-black text-lg font-semibold">
            {formatPrice(data.totals.salePrice)}
          </h1>
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-black text-2xl">{trans("Total")}</h1>
          <h1 className="text-black text-2xl">
            <span className="text-slate-700 text-sm font-normal mx-2">
              {currentCurrency}
            </span>
            {formatPrice(data.totals.finalPrice ?? 0)}
          </h1>
        </div>
      </div>
    );
  }
};

export default CheckoutSummaryDetails;
