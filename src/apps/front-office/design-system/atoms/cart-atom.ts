import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { addItem, updateItem } from "../services/cart-services";

export const cartAtom = atom({
  key: "cart",
  default: cache.get("cart"),
  actions: {
    addItem(productId: number, quantity: number) {
      const cart = cartAtom.value;
      const existingItem = cart.items.find(
        item => item.product.id === productId,
      );
      if (existingItem) {
        existingItem.quantity += quantity;
        updateItem(existingItem.id, existingItem.quantity);
      } else {
        cart.push({ productId, quantity });
        addItem(productId, quantity);
      }
      cache.set("cart", cart);
      return cartAtom.update(cart);
    },
    updateQuantity(productId: number, quantity: number) {
      const cart = cartAtom.value;
      const existingItem = cart.items.find(
        item => item.product.id === productId,
      );
      if (existingItem) {
        existingItem.quantity = quantity;
        cache.set("cart", cart);
        updateItem(existingItem.id, existingItem.quantity);
        return cartAtom.update(cart);
      }
      return cart;
    },
    deleteItem(itemId: number) {
      let cart = cartAtom.value;
      cart = cart.items.filter(item => item.id !== itemId);
      cache.set("cart", cart);
      //   deleteItem(itemId);
      return cartAtom.update(cart);
    },
  },
});
