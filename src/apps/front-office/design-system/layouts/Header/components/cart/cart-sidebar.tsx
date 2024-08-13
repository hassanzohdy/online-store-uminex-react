import { cartAtom } from "apps/front-office/design-system/atoms/cart-atom";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { useCart } from "apps/front-office/design-system/hooks/useCart";
import { IoCartOutline } from "react-icons/io5";
import CartContainer from "./cart-container";

const CartSidebar = () => {
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
    cartAtom.update(data.cart);
    return (
      <div className="flex items-center">
        <CartContainer />
      </div>
    );
  }
};

export default CartSidebar;
