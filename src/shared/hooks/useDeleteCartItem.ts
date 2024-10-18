import { cartAtom } from "design-system/atoms/cart-atom";
import { useState } from "react";

export const useDeleteCartItem = (cartItemId: number) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const deleteItem = async () => {
    setIsDeleting(true);
    await cartAtom.deleteItem(cartItemId);
    setIsDeleting(false);
  };

  return {
    isDeleting,
    deleteItem,
  };
};
