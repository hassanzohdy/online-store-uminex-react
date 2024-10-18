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
      const newWishlist = await addItem(product.id);
      cache.set("wishlist", newWishlist.data);
      return wishlistAtom.update(newWishlist.data);
    },

    deleteItem: async (itemId: number) => {
      const newWishlist = await deleteItem(itemId);
      cache.set("wishlist", newWishlist.data);
      return wishlistAtom.update(newWishlist.data);
    },
  },
});
