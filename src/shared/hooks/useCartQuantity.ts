import { cartAtom } from "design-system/atoms/cart-atom";
import { useState } from "react";

export const useCartQuantity = (
  cartItemId: number,
  initialQuantity: number,
) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateQuantity = async (newQuantity: number) => {
    setIsLoading(true);
    setQuantity(newQuantity);
    cartAtom.updateQuantity(cartItemId, newQuantity);
    setIsLoading(false);
  };

  const decreaseQuantity = async () => {
    if (quantity > 1) {
      updateQuantity(quantity - 1);
    }
  };

  const increaseQuantity = async () => {
    updateQuantity(quantity + 1);
  };

  return {
    quantity,
    isLoading,
    increaseQuantity,
    decreaseQuantity,
  };
};
