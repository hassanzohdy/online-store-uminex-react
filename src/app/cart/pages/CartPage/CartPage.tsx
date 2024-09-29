import Helmet from "@mongez/react-helmet";
import { useState } from "react";

import CartOrderDetails from "app/cart/components/CartOrderDetails";
import CartProductsDetails from "app/cart/components/CartProductsDetails";
import { cartAtom } from "design-system/atoms/cart-atom";
import Breadcrumbs from "design-system/components/Breadcrumbs";
import { cn } from "shared/lib/utils";

export default function CartPage() {
  const cart = cartAtom.value;
  const [_, setTicks] = useState(0);
  const updateData = () => {
    setTicks(prev => prev + 1);
  };

  return (
    <div className="w-full">
      <Breadcrumbs title="Your Cart" center />
      <Helmet title="Cart Page" />
      <div
        className={cn(
          "w-full max-w-[1440px] mx-auto px-4 py-6 gap-10",
          cart.items && cart.items.length > 0
            ? "grid grid-cols-1 lg:grid-cols-4 "
            : " flex items-center justify-center",
        )}>
        <CartProductsDetails handleUpdateData={updateData} />
        <CartOrderDetails />
      </div>
    </div>
  );
}
