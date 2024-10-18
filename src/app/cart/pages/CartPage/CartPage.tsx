import Helmet from "@mongez/react-helmet";

import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import CartOrderDetails from "app/cart/components/CartOrderDetails";
import CartProductsDetails from "app/cart/components/CartProductsDetails";
import { cartAtom } from "design-system/atoms/cart-atom";
import Breadcrumbs from "design-system/components/Breadcrumbs";
import { Button } from "design-system/components/ui/button";
import EmptyCartIcon from "shared/assets/images/empty-cart.svg";
import { cn } from "shared/lib/utils";
import URLS from "shared/utils/urls";

export default function CartPage() {
  const cart = cartAtom.useValue();

  if (!cart.items) {
    return (
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-5 py-5">
          <img
            src={EmptyCartIcon}
            alt="empty cart"
            className="w-24 h-24"
            loading="lazy"
          />
          <p className="text-sm font-semibold text-primary ">
            {trans("emptyCart")}
          </p>
          <Button
            asChild
            variant={"primary"}
            size={"lg"}
            className="rounded-full h-12 w-60">
            <Link href={URLS.shop.products}>{trans("Continue Shopping")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Breadcrumbs title="Your Cart" center />
      <Helmet title="Cart Page" />
      <div
        className={cn(
          "w-full max-w-[1440px] mx-auto px-4 py-6 gap-10 grid grid-cols-1 lg:grid-cols-4 ",
        )}>
        <CartProductsDetails />
        <CartOrderDetails />
      </div>
    </div>
  );
}
