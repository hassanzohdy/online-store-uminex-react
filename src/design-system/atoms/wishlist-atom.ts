import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { Product, Wishlist } from "../../shared/utils/types";
import { addItem, deleteItem } from "../services/wishlist-services";

export const wishlistAtom = atom<Wishlist>({
  key: "wishlist",
  default: cache.get("wishlist", {}),
  beforeUpdate(wishlist) {
    cache.set("wishlist", wishlist);
    return wishlist;
  },
  actions: {
    refresh() {
      wishlistAtom.update(wishlistAtom.value);
    },

    addToWishlist: async (product: Product) => {
      const wishlist = wishlistAtom.value;
      const isProductExists = wishlist.products.some(
        item => item.id === product.id,
      );
      if (isProductExists) {
        return;
      }
      wishlist.totalWishlist += 1;
      await addItem(product.id);
      wishlist.products.push(product);
      cache.set("wishlist", wishlist);
      return wishlistAtom.update(wishlist);
    },

    deleteItem: (itemId: number) => {
      const wishlist = wishlistAtom.value;
      wishlist.totalWishlist -= 1;
      wishlist.products = wishlist.products.filter(item => item.id !== itemId);
      cache.set("wishlist", wishlist);
      deleteItem(itemId);
      return wishlistAtom.update(wishlist);
    },
  },
});
