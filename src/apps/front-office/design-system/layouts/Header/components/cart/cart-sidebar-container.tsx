import { IoCartOutline } from "react-icons/io5";

import { cartAtom } from "design-system/atoms/cart-atom";
import { Button } from "design-system/components/ui/button";
import { useCart } from "design-system/hooks/useCart";
import CartSidebar from "./cart-sidebar";

export default function CartSidebarContainer() {
  const { data, isLoading, error } = useCart();

  if (isLoading) {
    return (
      <Button variant={"ghost"} className="hover:bg-transparent">
        <div className="relative">
          <IoCartOutline className="h-8 w-8 text-slate-700" />
        </div>
      </Button>
    );
  }

  if (error) {
    return <div className="text-red">Error loading cart data.</div>;
  }

  if (data) {
    cartAtom.update(data);
    return (
      <div className="flex items-center">
        <CartSidebar />
      </div>
    );
  }
}
