import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { Input } from "apps/front-office/design-system/components/ui/input";
import { useCartQuantity } from "apps/front-office/design-system/hooks/useCartQuantity";
import { useDeleteCartItem } from "apps/front-office/design-system/hooks/useDeleteCartItem";
import {
  formatNumber,
  formatPrice,
} from "apps/front-office/design-system/lib/formats";
import { CartItemType } from "apps/front-office/design-system/utils/types";
import { FiTrash2 } from "react-icons/fi";

interface CartItemProps {
  cartItem: CartItemType;
  changeQuantity: () => void;
}

const CartItem = ({ cartItem, changeQuantity }: CartItemProps) => {
  const currentLanguage = current("localeCode");
  const { quantity, isLoading, increaseQuantity, decreaseQuantity } =
    useCartQuantity(cartItem.id, cartItem.quantity, changeQuantity);

  const { isDeleting, deleteItem } = useDeleteCartItem(
    cartItem.id,
    changeQuantity,
  );

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
        <h1 className="text-black text-sm font-semibold">
          {trans(
            cartItem.product.name.find(
              name => name.localeCode === currentLanguage,
            )?.value || "",
          )}
        </h1>
        <h2 className="text-blue text-sm font-semibold">
          {formatPrice(cartItem.total.finalPrice)}
        </h2>
        <div className="flex items-center gap-1">
          <Button
            variant={"outline"}
            size={"sm"}
            className="text-lg"
            onClick={decreaseQuantity}
            disabled={isLoading || quantity <= 1}>
            -
          </Button>
          <Input
            className="w-[100px] bg-slate-100 text-center"
            value={formatNumber(quantity)}
            readOnly
          />
          <Button
            variant={"outline"}
            size={"sm"}
            className="text-lg"
            onClick={increaseQuantity}
            disabled={isLoading}>
            +
          </Button>
        </div>
      </div>
      <Button
        className=""
        variant={"ghost"}
        onClick={deleteItem}
        disabled={isDeleting || isLoading}>
        <FiTrash2 className="w-4 h-4 text-red" />
      </Button>
    </div>
  );
};

export default CartItem;
