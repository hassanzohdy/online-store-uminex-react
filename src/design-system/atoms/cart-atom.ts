import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";

import { toast } from "shared/hooks/use-toast";
import { calculateCartTotals } from "../../shared/utils/cart-utils";
import { CartType, Product } from "../../shared/utils/types";
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
        const cart = cartAtom.value;

        if (!cart.items) {
          cart.items = [];
        }

        const existingItem = cart.items.find(
          item => item.product.id === product.id,
        );

        addItem(product.id, quantity || 1);

        if (existingItem) {
          existingItem.quantity += quantity || 1;
          existingItem.total.finalPrice =
            existingItem.quantity *
            (existingItem.salePrice || existingItem.total.price);
          existingItem.total.price = existingItem.quantity * product.price;
          existingItem.total.discount =
            existingItem.quantity * product.discount;
        } else {
          const newItem = {
            product,
            quantity: quantity || 1,
            id: Math.floor(Math.random() * 10000000),
            salePrice: product.salePrice,
            total: {
              discount: product.discount || 0,
              finalPrice: product.salePrice || product.price,
              price: product.price,
              salePrice: product.salePrice || product.price,
            },
          };
          cart.items.push(newItem);
        }

        calculateCartTotals(cart);
        cartAtom.update(cart);
        cache.set("cart", cart);
        return cartAtom.update(cart);
      } catch (error: any) {
        console.log(error);
        toast({
          title: "Error",
          description: "something went wrong",
          variant: "destructive",
        });
      }
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

    async deleteItem(itemId: number) {
      const cart = cartAtom.value;
      cart.items = cart.items.filter(item => item.id !== itemId);
      calculateCartTotals(cart);
      cache.set("cart", cart);
      deleteItem(itemId);
      return cartAtom.update(cart);
    },

    deleteAllItems: async () => {
      const cart = cartAtom.value;
      cart.items = [];
      cart.totals = {
        discount: 0,
        finalPrice: 0,
        price: 0,
        salePrice: 0,
        subtotal: 0,
        tax: 0,
      };
      await flushCart();
      cache.set("cart", cart);
      return cartAtom.update(cart);
    },
  },
});
