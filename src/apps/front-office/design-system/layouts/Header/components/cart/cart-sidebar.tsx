import { preload } from "@mongez/react-utils";
import { cartAtom } from "apps/front-office/design-system/atoms/cart-atom";
import { getCart } from "apps/front-office/design-system/services/cart-services";
import CartContainer from "./cart-container";

interface _CartSidebarProps {
  data;
}
const _CartSidebar = ({ data }: _CartSidebarProps) => {
  cartAtom.update(data.cart);
  return (
    <div className="flex items-center">
      <CartContainer />
    </div>
  );
};

const CartSidebar = preload(_CartSidebar, getCart);
export default CartSidebar;
