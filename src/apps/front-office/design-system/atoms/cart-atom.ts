import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { deleteItem, updateItem } from "../services/cart-services";

function calculateCartTotals(cart, itemId?: number, newQuantity?: number) {
  if (itemId !== undefined && newQuantity !== undefined) {
    const item = cart.items.find(item => item.id === itemId);
    if (item) {
      item.quantity = newQuantity;
      item.total = {
        discount: item.total.discount,
        finalPrice: (item.salePrice || item.price) * item.quantity,
        price: item.total.price,
        salePrice: (item.salePrice || item.price) * item.quantity,
      };
    }
  }

  const subtotal = cart.items.reduce((acc, item) => {
    return acc + (item.salePrice || item.price) * item.quantity;
  }, 0);

  const tax = (cart.taxRate / 100) * subtotal;
  const finalPrice = subtotal + tax;

  cart.totals = {
    subtotal,
    tax,
    finalPrice,
    salePrice: finalPrice,
  };
}

export const cartAtom = atom({
  key: "cart",
  default: cache.get("cart", {}),
  beforeUpdate(cart) {
    cache.set("cart", cart);
    return cart;
  },
  actions: {
    refresh() {
      cartAtom.update(cartAtom.value);
    },

    updateQuantity(itemId: number, quantity: number) {
      const cart = cartAtom.value;
      const existingItem = cart.items.find(item => item.id === itemId);
      if (existingItem) {
        existingItem.quantity = quantity;
        calculateCartTotals(cart, existingItem.id, quantity);
        cache.set("cart", cart);
        cartAtom.update(cart);
        cartAtom.refresh();
        return updateItem(existingItem.id, existingItem.quantity);
      }
      return cart;
    },

    deleteItem(itemId: number) {
      let cart = cartAtom.value;
      cart.items = cart.items.filter(item => item.id !== itemId);
      calculateCartTotals(cart);
      cache.set("cart", cart);
      deleteItem(itemId);
      return cartAtom.update(cart);
    },
  },
});
