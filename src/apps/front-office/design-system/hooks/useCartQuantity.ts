import { useState } from "react";
import { cartAtom } from "apps/front-office/design-system/atoms/cart-atom";

export const useCartQuantity = (
  cartItemId: number,
  initialQuantity: number,
  onQuantityChange: () => void
) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateQuantity = async (newQuantity: number) => {
    setIsLoading(true);
    setQuantity(newQuantity);
    cartAtom.updateQuantity(cartItemId, newQuantity);
    onQuantityChange();
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
