import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";

import { addItem, deleteItem, updateItem } from "../services/cart-services";
import { calculateCartTotals } from "../utils/cart-utils";
import { CartType, Product } from "../utils/types";

export const cartAtom = atom<CartType>({
  key: "cart",
  default: cache.get("cart", {}),
  beforeUpdate(cart) {
    cache.set("cart", cart);
    return cart;
  },
  actions: {
    addToCart: async (product: Product) => {
      const cart = cartAtom.value;

      const existingItem = cart.items.find(
        item => item.product.id === product.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;

        existingItem.total.finalPrice =
          existingItem.quantity * existingItem.salePrice;
        existingItem.total.price = existingItem.quantity * product.price;
        existingItem.total.discount = existingItem.quantity * product.discount;
      } else {
        const newItem = {
          product,
          quantity: 1,
          id: Math.floor(Math.random() * 10000000),
          salePrice: product.salePrice,
          total: {
            discount: product.discount,
            finalPrice: product.salePrice,
            price: product.price,
            salePrice: product.salePrice,
          },
        };
        cart.items.push(newItem);
      }

      await addItem(product.id, 1);

      calculateCartTotals(cart);

      cache.set("cart", cart);
      return cartAtom.update(cart);
    },
    updateQuantity(itemId: number, quantity: number) {
      const cart = cartAtom.value;
      const existingItem = cart.items.find(item => item.id === itemId);
      if (existingItem) {
        existingItem.quantity = quantity;
        calculateCartTotals(cart, existingItem.id, quantity);
        cache.set("cart", cart);
        cartAtom.update(cart);
        return updateItem(existingItem.id, existingItem.quantity);
      }
      return cart;
    },

    deleteItem(itemId: number) {
      const cart = cartAtom.value;
      cart.items = cart.items.filter(item => item.id !== itemId);
      calculateCartTotals(cart);
      cache.set("cart", cart);
      deleteItem(itemId);
      return cartAtom.update(cart);
    },
  },
});
