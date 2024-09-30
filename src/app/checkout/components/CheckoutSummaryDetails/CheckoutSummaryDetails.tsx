import { trans } from "@mongez/localization";
import { navigateBack, queryString } from "@mongez/react-router";
import { useProductsDetails } from "app/shop/hooks/useProductDetails";
import { cartAtom } from "design-system/atoms/cart-atom";
import { currencyAtom } from "design-system/atoms/currency-atom";
import { Separator } from "design-system/components/ui/separator";
import { useEffect, useState } from "react";
import { formatPrice } from "shared/lib/formats";
import { CartItemType } from "shared/utils/types";
import CheckoutSummaryDetailsCartItem from "./CheckoutSummaryDetailsCartItem";
import CheckoutSummaryDetailsLoadingComponent from "./CheckoutSummaryDetailsLoadingComponent";

export default function CheckoutSummaryDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  const cart = cartAtom.value;
  const productId = queryString.get("productId");

  const { data: product } = useProductsDetails(productId || "");

  useEffect(() => {
    if (productId && product) {
      setData([
        {
          id: product.id,
          product,
          quantity: 1,
          total: {
            discount: product.discount?.amount || null,
            finalPrice: product.salePrice || product.price,
            price: product.price,
            salePrice: product.salePrice || product.price,
          },
        },
      ]);
    } else if (cart && cart.items) {
      setData(cart.items);
    } else {
      navigateBack();
    }
  }, [product, cart, productId]);

  const currentCurrency = currencyAtom.value;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <CheckoutSummaryDetailsLoadingComponent />;
  }

  console.log(data);

  return (
    <div className="flex flex-col items-start w-full gap-3 max-w-[650px] px-4 sticky top-[50px]">
      {data &&
        data.map((item: CartItemType) => (
          <CheckoutSummaryDetailsCartItem key={item.id} item={item} />
        ))}
      <Separator className="my-5" />
      <div className="flex items-center justify-between w-full">
        <h1 className="text-black text-md">{trans("Subtotal")}</h1>
        <h1 className="text-black text-md">
          {formatPrice(
            productId ? data[0].total.salePrice : cart.totals.salePrice,
          )}
        </h1>
      </div>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-black text-lg font-medium">{trans("Total")}</h1>
        <h1 className="text-black text-lg font-medium">
          <span className="text-slate-700 text-sm font-normal mx-2">
            {currentCurrency}
          </span>
          {formatPrice(
            productId
              ? data[0].total.finalPrice
              : (cart.totals.finalPrice ?? 0),
          )}
        </h1>
      </div>
    </div>
  );

  return null;
}
