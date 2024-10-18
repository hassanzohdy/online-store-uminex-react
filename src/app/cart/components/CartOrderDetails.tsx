import { trans } from "@mongez/localization";
import { Link, navigateTo } from "@mongez/react-router";
import { ChangeEvent, useState } from "react";

import { cartAtom } from "design-system/atoms/cart-atom";
import { Button } from "design-system/components/ui/button";
import { Checkbox } from "design-system/components/ui/checkbox";
import { Input } from "design-system/components/ui/input";
import { Separator } from "design-system/components/ui/separator";
import { formatPrice } from "shared/lib/formats";
import URLS from "shared/utils/urls";
import { cartOrderAtom } from "../atoms/cart-order-atom";

export default function CartOrderDetails() {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");
  const cart = cartAtom.useValue();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const goToCheckout = () => {
    return navigateTo(URLS.checkout);
  };

  const handleCouponChange = (e: ChangeEvent<HTMLInputElement>) => {
    const coupon = e.target.value;
    setValue(coupon);
    cartOrderAtom.addCouponCode(coupon);
  };

  return (
    <div className="border border-blue rounded-lg p-7 flex flex-col items-start gap-5 w-full">
      <div className="flex flex-col items-start gap-3 w-full">
        <h1 className="text-primary text-md font-bold uppercase">
          {trans("Cart Totals")}
        </h1>
        <Separator />
        <div className="flex items-center justify-between flex-wrap w-full my-3">
          <h2 className="text-primary text-md font-bold">
            {trans("subtotal")}
          </h2>
          <p className="text-sm font-bold text-primary">
            {formatPrice(cart.totals.subtotal)}
          </p>
        </div>
        <Separator />
      </div>
      <div className="w-full my-5 flex flex-col items-start gap-3">
        <h1 className="text-md text-primary font-bold uppercase">
          {trans("Add Coupon")}
        </h1>
        <Separator className="w-[60px] h-[2.5px]" />
        <p className="text-primary text-sm">
          {trans("Coupon code will work on checkout page.")}
        </p>
        <Input
          placeholder={trans("Coupon Code")}
          onChange={handleCouponChange}
          value={value}
          className="w-full bg-lightGray rounded-full py-6 border-0 ring-0 
          focus:ring-0 focus-visible:ring-0 ring-offset-0 inset-y-0"
        />
      </div>
      <Separator />
      <div className="flex items-center justify-between flex-wrap w-full my-3">
        <h2 className="text-primary text-md font-bold">
          {trans("Total Taxes")}
        </h2>
        <p className="text-sm font-bold text-primary">
          {formatPrice(cart.totals.tax)}
        </p>
      </div>
      <Separator />
      <div className="flex items-center justify-between flex-wrap w-full my-3">
        <h2 className="text-primary text-md font-bold">
          {trans("Shipping Fees")}
        </h2>
        <p className="text-sm font-bold text-primary">
          {formatPrice(cart.totals.shippingFees || 20)}
        </p>
      </div>
      <Separator />
      <div className="flex items-center justify-between flex-wrap w-full my-3">
        <h2 className="text-primary text-md font-bold">
          {trans("Order Total")}
        </h2>
        <p className="text-lg font-bold text-red">
          {formatPrice(cart.totals.finalPrice)}
        </p>
      </div>
      <Separator />
      <div className="flex items-start flex-col gap-3 w-full">
        <div className="flex items-center gap-2" onClick={handleCheckboxChange}>
          <Checkbox checked={isChecked} id="agree" />
          <label htmlFor="agree" className="text-primary text-md font-medium">
            {trans("I agree with")}{" "}
            <Link className="text-[#479ccf]" href={URLS.pages.termsConditions}>
              {trans("Terms & Conditions")}
            </Link>
          </label>
        </div>
        <Button
          variant={"primary"}
          className="w-full rounded-full h-12 text-xs"
          size={"sm"}
          disabled={!isChecked}
          onClick={goToCheckout}>
          {trans("CheckOut")}
        </Button>
      </div>
    </div>
  );
}
