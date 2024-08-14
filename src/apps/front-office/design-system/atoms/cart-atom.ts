import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { deleteItem, updateItem } from "../services/cart-services";
import { calculateCartTotals } from "../utils/cart-utils";
import { CartType } from "../utils/types";

export const cartAtom = atom<CartType>({
  key: "cart",
  default: cache.get("cart", {}),
  beforeUpdate(cart) {
    cache.set("cart", cart);
    return cart;
  },
  actions: {
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
