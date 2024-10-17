import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";

import { toast } from "shared/hooks/use-toast";
import { CartType, Product } from "shared/utils/types";
import {
  addItem,
  deleteItem,
  flushCart,
  updateItem,
} from "../services/cart-services";

export const cartAtom = atom<CartType>({
  key: "cart",
  default: cache.get("cart", {}),
  beforeUpdate(cart) {
    cache.set("cart", cart);
    return cart;
  },
  actions: {
    addToCart: async (product: Product, quantity?: number) => {
      try {
        const newCart = await addItem(product.id, quantity || 1);

        cache.set("cart", newCart.data.cart);
        return cartAtom.update(newCart.data.cart);
      } catch (error: any) {
        console.log(error);
        toast({
          title: "Error",
          description: "something went wrong",
          variant: "destructive",
        });
      }
    },

    async updateQuantity(itemId: number, quantity: number) {
      const newCart = await updateItem(itemId, quantity);
      cache.set("cart", newCart.data.cart);
      cartAtom.update(newCart.data.cart);
    },

    async deleteItem(itemId: number) {
      const newCart = await deleteItem(itemId);
      cache.set("cart", newCart.data.cart);
      return cartAtom.update(newCart.data.cart);
    },

    deleteAllItems: async () => {
      const newCart = await flushCart();
      cache.set("cart", newCart.data.cart);
      return cartAtom.update(newCart.data.cart);
    },
  },
});
