import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Link } from "@mongez/react-router";
import { cartAtom } from "apps/front-office/design-system/atoms/cart-atom";
import { currencyAtom } from "apps/front-office/design-system/atoms/currency-atom";
import { Button } from "apps/front-office/design-system/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "apps/front-office/design-system/components/ui/sheet";
import {
  formatNumber,
  formatPrice,
} from "apps/front-office/design-system/lib/formats";
import URLS from "apps/front-office/utils/urls";
import { IoCartOutline } from "react-icons/io5";
import EmptyCartIcon from "shared/assets/images/empty-cart.svg";
import CartItem from "../cart/cart-item";

interface CartSheetSidebarProps {
  changeTicks: () => void;
}
const CartSheetSidebar = ({ changeTicks }: CartSheetSidebarProps) => {
  const language = current("localeCode");
  const cart = cartAtom.useValue();

  const changeQuantity = () => {
    changeTicks();
  };
  const items = cart.items;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="hover:bg-transparent">
          <div className="relative">
            <IoCartOutline className="h-8 w-8 text-slate-700" />
            {items && items.length > 0 && (
              <div
                className="absolute -top-1 -right-2 bg-red rounded-full 
                w-[18px] h-[18px] flex items-center justify-center">
                <span className="text-xs text-center text-slate-50">
                  {formatNumber(cart.totals.quantity ?? 0)}
                </span>
              </div>
            )}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="p-0 w-full md:max-w-sm overflow-y-auto"
        side={language === "ar" ? "left" : "right"}>
        <SheetHeader className="bg-slate-100 p-3">
          <SheetTitle className="text-slate-900 font-semibold text-md">
            {trans("shoppingCart")}
          </SheetTitle>
        </SheetHeader>
        {items && items.length > 0 ? (
          <div className="w-full ">
            <div className=" h-[600px] overflow-y-auto w-full">
              {items.map(cartItem => (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  changeQuantity={changeQuantity}
                />
              ))}
            </div>
            <div className="absolute bottom-0 p-5 w-full bg-slate-100 flex flex-col items-start gap-4">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-sm font-semibold text-black">
                  {trans("Subtotal")}
                </h1>
                <p className="text-lg text-red font-semibold">
                  {formatPrice(cart.totals.subtotal, currencyAtom.value)}
                </p>
              </div>
              <Button
                asChild
                variant={"outline"}
                className="w-full rounded-full p-6">
                <Link href={URLS.cart}>{trans("ViewCart")}</Link>
              </Button>
              <Button
                asChild
                variant={"primary"}
                className="w-full rounded-full p-6">
                <Link href={URLS.checkout}>{trans("CheckOut")}</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col gap-5 py-5">
            <img src={EmptyCartIcon} alt="empty cart" />
            <p className="text-sm font-medium text-slate-800 ">
              {trans("emptyCart")}
            </p>
            <Button
              asChild
              variant={"primary"}
              size={"lg"}
              className="rounded-full">
              <Link to={URLS.collections}>{trans("emptyCartBtn")}</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheetSidebar;
