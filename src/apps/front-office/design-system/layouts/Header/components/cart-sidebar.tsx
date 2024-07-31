import { trans } from "@mongez/localization";
import { preload } from "@mongez/react-utils";
import { cartAtom } from "apps/front-office/design-system/atoms/cart-atom";
import { formatPrice } from "apps/front-office/design-system/lib/formats";
import { getCart } from "apps/front-office/design-system/services/cart-services";
import CartSheetSidebar from "./sheets/cart-sidebar-sheet";

interface _CartSidebarProps {
  data;
}
const _CartSidebar = ({ data }: _CartSidebarProps) => {
  cartAtom.update(data.cart);
  const cart = cartAtom.useValue();

  return (
    <div className="flex items-center">
      <CartSheetSidebar cart={cart} />
      <div className="hidden xl:flex flex-col items-start">
        <span className="text-xs text-slate-600">{trans("cart")}</span>
        <p className="text-sm font-medium text-primary p-0">
          {formatPrice(cart.totals ? cart.totals.discount : 0)}
        </p>
      </div>
    </div>
  );
};

const CartSidebar = preload(_CartSidebar, getCart);
export default CartSidebar;
