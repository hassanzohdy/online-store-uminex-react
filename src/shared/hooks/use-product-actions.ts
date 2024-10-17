import { trans } from "@mongez/localization";
import { navigateTo } from "@mongez/react-router";
import { cartAtom } from "design-system/atoms/cart-atom";
import { compareAtom } from "design-system/atoms/compare-atom";
import { modalAtom } from "design-system/atoms/model-atom";
import { wishlistAtom } from "design-system/atoms/wishlist-atom";
import { useEffect, useState } from "react";
import { toast } from "shared/hooks/use-toast";
import { translateText } from "shared/utils/translate-text";
import { Product } from "shared/utils/types";
import URLS from "shared/utils/urls";

export const useProductActions = (product: Product) => {
  const [estimatedDelivery, setEstimatedDelivery] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = async () => {
    await cartAtom.addToCart(product, quantity);
    modalAtom.onOpen("cart");
    toast({
      variant: "success",
      title: trans("Added To Cart"),
      description: `${translateText(product.name)} has Been Added Successfully`,
    });
  };

  const handleRemoveFromCart = async () => {
    await cartAtom.deleteItem(product, quantity);
    toast({
      variant: "destructive",
      title: trans("Removed from Cart"),
      description: `${translateText(product.name)} has Been Removed`,
    });
  };

  const addToCompare = async () => {
    await compareAtom.addToCompare(product);
    modalAtom.onOpen("compare");
    toast({
      variant: "success",
      title: trans("Added To Compare"),
      description: `${translateText(product.name)} has Been Added Successfully`,
    });
  };

  const addToWishlist = async () => {
    await wishlistAtom.addToWishlist(product);
    modalAtom.onOpen("wishlist");
    toast({
      variant: "success",
      title: trans("Added To Wishlist"),
      description: `${translateText(product.name)} has Been Added Successfully`,
    });
  };

  const removeFromWishlist = async () => {
    await wishlistAtom.deleteItem(product.id);
    modalAtom.onOpen("wishlist");
    toast({
      variant: "destructive",
      title: trans("Removed From Wishlist"),
      description: `${translateText(product.name)} has Been removed Successfully`,
    });
  };

  const removeFromCompare = () => {
    compareAtom.deleteItem(product.id);
    modalAtom.onOpen("compare");
    toast({
      variant: "destructive",
      title: trans("Removed From Compare"),
      description: `${translateText(product.name)} has Been removed Successfully`,
    });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const goToCheckout = (id?: number) => {
    return navigateTo(`${URLS.checkout}?productId=${id}`);
  };

  useEffect(() => {
    const today = new Date();

    const deliveryStart = new Date(today);
    const deliveryEnd = new Date(today);

    deliveryEnd.setDate(today.getDate() + 4);

    const formatDate = (date: Date) => {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    };

    setEstimatedDelivery(
      `${trans("Estimated Delivery")}: ${formatDate(deliveryStart)} - ${formatDate(deliveryEnd)}`,
    );
  }, []);

  return {
    handleQuantityChange,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleAddToCart,
    addToCompare,
    addToWishlist,
    removeFromWishlist,
    handleCheckboxChange,
    removeFromCompare,
    goToCheckout,
    isChecked,
    quantity,
    estimatedDelivery,
    handleRemoveFromCart,
  };
};
