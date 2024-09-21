import { trans } from "@mongez/localization";
import { navigateTo } from "@mongez/react-router";
import URLS from "app/utils/urls";
import { cartAtom } from "design-system/atoms/cart-atom";
import { compareAtom } from "design-system/atoms/compare-atom";
import { wishlistAtom } from "design-system/atoms/wishlist-atom";
import { toast } from "design-system/hooks/use-toast";
import { Product } from "design-system/utils/types";
import { useEffect, useState } from "react";

export const useProductActions = (product: Product, currentLocale: string) => {
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

  const handleAddToCart = () => {
    cartAtom.addToCart(product, quantity);
    toast({
      variant: "success",
      title: trans("Added To Cart"),
      description: `${product.name.find(name => name.localeCode === currentLocale)?.value} has Been Added Successfully`,
    });
  };

  const addToCompare = () => {
    compareAtom.addToCompare(product);
    toast({
      variant: "success",
      title: trans("Added To Compare"),
      description: `${product.name.find(name => name.localeCode === currentLocale)?.value} has Been Added Successfully`,
    });
  };

  const addToWishlist = () => {
    wishlistAtom.addToWishlist(product);
    toast({
      variant: "success",
      title: trans("Added To Wishlist"),
      description: `${product.name.find(name => name.localeCode === currentLocale)?.value} has Been Added Successfully`,
    });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const goToCheckout = () => {
    return navigateTo(URLS.checkout);
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
    handleCheckboxChange,
    goToCheckout,
    isChecked,
    quantity,
    estimatedDelivery,
  };
};
