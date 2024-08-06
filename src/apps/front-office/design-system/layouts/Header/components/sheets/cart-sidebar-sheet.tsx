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
import {
  formatNumber,
  formatPrice,
} from "apps/front-office/design-system/lib/formats";
import { IoCartOutline } from "react-icons/io5";
import EmptyCartIcon from "shared/assets/images/empty-cart.svg";
import CartItem from "../cart-item";

type LocalizedText = {
  localeCode: string;
  value: string;
};

type Image = {
  name: string;
  hash: string;
  mimeType: string;
  extension: string;
  size: number;
  url: string;
  id: string;
  width: number;
  height: number;
  path: string;
};

type Brand = {
  id: number;
  name: LocalizedText[];
  slug: string;
  logo: Image;
};

type Category = {
  id: number;
  isActive: boolean;
  name: LocalizedText[];
  image: Image;
  slug: string;
};

type Discount = {
  percentage: number;
  amount: number;
};

type Product = {
  id: number;
  brand: Brand;
  category: Category;
  discount: Discount;
  images: Image[];
  inCart: boolean;
  inCompare: boolean;
  inWishlist: boolean;
  isActive: boolean;
  name: LocalizedText[];
  price: number;
  salePrice: number;
  shortDescription: LocalizedText[];
  slug: string;
  type: string;
};

export type CartItemType = {
  id: number;
  product: Product;
  quantity: number;
  salePrice: number;
  total: {
    discount: number;
    finalPrice: number;
    price: number;
    salePrice: number;
  };
};
interface CartSheetSidebarProps {
  items: CartItemType[];
}
const CartSheetSidebar = ({ cart }: any) => {
  const language = current("localeCode");
  const { items }: CartSheetSidebarProps = cart;

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
                  {formatNumber(items.length)}
                </span>
              </div>
            )}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="p-0 w-full md:max-w-sm"
        side={language === "ar" ? "left" : "right"}>
        <SheetHeader className="bg-slate-100 p-3">
          <SheetTitle className="text-slate-900 font-semibold text-md">
            {trans("shoppingCart")}
          </SheetTitle>
        </SheetHeader>
        {items && items.length > 0 ? (
          <div className="w-full">
            <div className="overflow-y-auto w-full">
              {items.map(cartItem => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
            <div className="absolute bottom-0 p-5 w-full bg-slate-100 flex flex-col items-start gap-4">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-sm font-semibold text-black">
                  {trans("Subtotal")}
                </h1>
                <p className="text-lg text-red font-semibold">
                  {formatPrice(cart.totals.discount)}
                </p>
              </div>
              <Button
                asChild
                variant={"outline"}
                className="w-full rounded-full p-6">
                <Link href="/cart">View Cart</Link>
              </Button>
              <Button
                asChild
                variant={"primary"}
                className="w-full rounded-full p-6">
                <Link href="/checkout">Check Out</Link>
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
              <Link to="/collections/all">{trans("emptyCartBtn")}</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheetSidebar;
