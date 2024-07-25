import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Link } from "@mongez/react-router";
import { Button } from "apps/front-office/design-system/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "apps/front-office/design-system/components/ui/sheet";
import { IoCartOutline } from "react-icons/io5";
import EmptyCartIcon from "shared/assets/images/empty-cart.svg";
const CartSheetSidebar = () => {
  const cartItems = [];
  const language= current("localeCode");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="hover:bg-transparent">
          <div className="relative">
            <IoCartOutline className="h-8 w-8 text-slate-700" />
            <div
              className="absolute -top-1 -right-2 bg-red rounded-full 
              w-[18px] h-[18px] flex items-center justify-center">
              <span className="text-xs text-center text-slate-50">
                {cartItems.length}
              </span>
            </div>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side={language==="ar"?"left":"right"}>
        <SheetHeader className="bg-slate-100 p-3">
          <SheetTitle className="text-slate-900 font-semibold text-md">
            {trans("shoppingCart")}
          </SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <div>Cart items ({cartItems.length})</div>
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
              <Link to="/collections/all">{trans("emptyCartBtn")}</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheetSidebar;
