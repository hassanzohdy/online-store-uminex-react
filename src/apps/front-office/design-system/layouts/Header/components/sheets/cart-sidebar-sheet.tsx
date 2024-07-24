import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "apps/front-office/design-system/components/ui/sheet";
import EmptyCartIcon from "shared/assets/images/empty-cart.svg";
import { Link } from "@mongez/react-router";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "apps/front-office/design-system/components/ui/button";
const CartSheetSidebar = () => {
  const cartItems = [];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="hover:bg-transparent">
          <div className="relative">
            <IoCartOutline className="h-8 w-8 text-slate-700" />
            <span
              className="absolute -top-1 -right-2 bg-rose-600 text-slate-50
             rounded-full w-[16px] h-[16px] text-xs">
              0
            </span>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0">
        <SheetHeader className="bg-slate-100 p-3">
          <SheetTitle className="text-slate-900 font-semibold text-md">
            Shopping Cart
          </SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <div>Cart items ({cartItems.length})</div>
        ) : (
          <div className="flex items-center justify-center flex-col gap-5 py-5">
            <img src={EmptyCartIcon} alt="empty cart" />
            <p className="text-sm font-medium text-slate-800 ">
              Your Cart is Empty
            </p>
            <Button asChild variant={"primary"} size={"lg"} className="rounded-full">
              <Link to="/collections/all">Return To The Shop</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheetSidebar;
