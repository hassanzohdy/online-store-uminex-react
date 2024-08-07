import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { CartItemType } from "apps/front-office/collections/utils/types";
import { cartAtom } from "apps/front-office/design-system/atoms/cart-atom";
import { currencyAtom } from "apps/front-office/design-system/atoms/currency-atom";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { Input } from "apps/front-office/design-system/components/ui/input";
import {
  formatNumber,
  formatPrice,
} from "apps/front-office/design-system/lib/formats";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

interface CartItemProps {
  cartItem: CartItemType;
  changeQuantity: (quantity: number) => void;
}

const CartItem = ({ cartItem, changeQuantity }: CartItemProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<number>(cartItem.quantity);
  const currentLanguage = current("localeCode");
  const currentCurrency = currencyAtom.useValue()

  const handleDecreaseQuantity = async () => {
    setIsLoading(true);
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      await cartAtom.updateQuantity(cartItem.id, newValue);
      changeQuantity(newValue);
    }
    setIsLoading(false);
  };

  const handleIncreaseQuantity = async () => {
    setIsLoading(true);
    const newValue = value + 1;
    setValue(newValue);
    await cartAtom.updateQuantity(cartItem.id, newValue);
    changeQuantity(newValue);
    setIsLoading(false);
  };

  const handleDeleteItem = async () => {
    setIsLoading(true);
    await cartAtom.deleteItem(cartItem.id);
    changeQuantity(value);
    setIsLoading(false);
  };

  return (
    <div className="flex items-start justify-between gap-3 relative w-full p-5">
      <div className="min-w-20 h-20 relative">
        <img
          src={cartItem.product.images[0].url}
          alt={cartItem.product.slug}
          className="w-full h-full"
        />
      </div>
      <div className="flex items-start flex-col gap-1">
        <h1 className="text-black text-sm font-medium">
          {trans(
            cartItem.product.name.find(
              name => name.localeCode === currentLanguage,
            )?.value || "",
          )}
        </h1>
        <h2 className="text-blue text-sm font-medium">
          {formatPrice(cartItem.total.finalPrice , currentCurrency)}
        </h2>
        <div className="flex items-center gap-1">
          <Button
            variant={"outline"}
            size={"sm"}
            className="text-lg"
            onClick={handleDecreaseQuantity}
            disabled={isLoading || value <= 1}>
            -
          </Button>
          <Input
            className="w-[100px] bg-slate-100 text-center"
            value={formatNumber(value)}
            readOnly
          />
          <Button
            variant={"outline"}
            size={"sm"}
            className="text-lg"
            onClick={handleIncreaseQuantity}
            disabled={isLoading}>
            +
          </Button>
        </div>
      </div>
      <Button
        className=""
        variant={"ghost"}
        onClick={handleDeleteItem}
        disabled={isLoading}>
        <FiTrash2 className="w-4 h-4 text-red" />
      </Button>
    </div>
  );
};

export default CartItem;
