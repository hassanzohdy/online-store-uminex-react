import { FaMinus } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";

import { translateText } from "app/products/utils/translate-text";
import { Button } from "design-system/components/ui/button";
import { Input } from "design-system/components/ui/input";
import { useCartQuantity } from "design-system/hooks/useCartQuantity";
import { useDeleteCartItem } from "design-system/hooks/useDeleteCartItem";
import { formatNumber, formatPrice } from "design-system/lib/formats";
import { CartItemType } from "design-system/utils/types";

interface CartItemProps {
  cartItem: CartItemType;
  changeQuantity: () => void;
}

export default function CartItem({ cartItem, changeQuantity }: CartItemProps) {
  const { quantity, isLoading, increaseQuantity, decreaseQuantity } =
    useCartQuantity(cartItem.id, cartItem.quantity, changeQuantity);

  const { isDeleting, deleteItem } = useDeleteCartItem(
    cartItem.id,
    changeQuantity,
  );

  return (
    <div className="flex items-start justify-between gap-3 relative w-full">
      <div className="flex items-start gap-5 w-full">
        <div className="min-w-20 h-20 relative">
          <img
            src={cartItem.product.images[0].url}
            alt={cartItem.product.slug}
            className="w-full h-full"
          />
        </div>
        <div className="flex items-start flex-col gap-3">
          <h1 className="text-primary text-sm font-semibold line-clamp-2">
            {translateText(cartItem.product.name)}
          </h1>
          <h2 className="text-blue text-sm font-semibold">
            {formatPrice(cartItem.total.finalPrice)}
          </h2>
          <div className="flex items-center gap-1">
            <Button
              variant={"outline"}
              size={"sm"}
              className="text-lg rounded-sm h-7 w-8 px-0"
              onClick={decreaseQuantity}
              disabled={isLoading || quantity <= 1}>
              <FaMinus className="w-full h-4 text-black" />
            </Button>
            <Input
              className="bg-lightGray text-center font-medium h-7 w-[80px] rounded-sm"
              value={formatNumber(quantity)}
              readOnly
            />
            <Button
              variant={"outline"}
              size={"sm"}
              className="text-lg rounded-sm h-7 w-8 px-0"
              onClick={increaseQuantity}
              disabled={isLoading}>
              +
            </Button>
          </div>
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
}
