import { FaMinus } from "react-icons/fa6";
import { LuTrash2 } from "react-icons/lu";

import { Button } from "design-system/components/ui/button";
import { Input } from "design-system/components/ui/input";
import { TableCell } from "design-system/components/ui/table";
import { useCartQuantity } from "shared/hooks/useCartQuantity";
import { useDeleteCartItem } from "shared/hooks/useDeleteCartItem";
import { formatNumber, formatPrice } from "shared/lib/formats";
import { translateText } from "shared/utils/translate-text";
import { CartItemType } from "shared/utils/types";

interface CartProductsDetailsCardProps {
  item: CartItemType;
}

export default function CartProductsDetailsCard({
  item,
}: CartProductsDetailsCardProps) {
  const { quantity, isLoading, increaseQuantity, decreaseQuantity } =
    useCartQuantity(item.id, item.quantity);

  const { isDeleting, deleteItem } = useDeleteCartItem(item.id);

  return (
    <>
      <TableCell className="flex items-center gap-5">
        <img
          src={item.product.images[0].url}
          alt={translateText(item.product.name)}
          className="w-[100px] h-[100px] object-cover"
          loading="lazy"
        />
        <div className="flex flex-col items-start gap-1 max-w-[60%]">
          <h1 className="text-sm text-primary font-semibold">
            {translateText(item.product.name)}
          </h1>
          {item.product.price && item.product.salePrice ? (
            <div className="flex gap-2 items-center">
              <span className="text-secondary font-semibold text-md">
                {formatPrice(item.product.salePrice)}
              </span>
              <span className="text-darkGray line-through text-sm">
                {formatPrice(item.product.price)}
              </span>
            </div>
          ) : (
            <span className="text-md text-blue font-semibold">
              {formatPrice(item.product.price)}
            </span>
          )}
        </div>
      </TableCell>

      <TableCell className="">
        <div className="flex items-center gap-1">
          <Button
            variant={"outline"}
            size={"sm"}
            className="text-md rounded-sm h-7 w-8 px-0 border-0 shadow-none"
            onClick={decreaseQuantity}
            disabled={quantity <= 1 || isLoading || isDeleting}>
            <FaMinus className="w-full h-4 text-black" />
          </Button>
          <Input
            className="bg-transparent border-0 text-center font-medium h-7 w-[55px] rounded-sm shadow-none"
            value={formatNumber(quantity)}
            readOnly
          />
          <Button
            variant={"outline"}
            size={"sm"}
            className="text-lg rounded-sm h-7 w-8 px-0 border-0 shadow-none"
            disabled={isLoading || isDeleting}
            onClick={increaseQuantity}>
            +
          </Button>
        </div>
      </TableCell>

      <TableCell className="text-primary font-semibold">
        {formatPrice(item.total.finalPrice)}
      </TableCell>
      <TableCell>
        <Button
          variant={"ghost"}
          onClick={deleteItem}
          disabled={isLoading || isDeleting}
          className="text-primary font-semibold cursor-pointer ">
          <LuTrash2 className="w-4 h-4" />
        </Button>
      </TableCell>
    </>
  );
}
