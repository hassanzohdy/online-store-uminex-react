import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";

import { CartOrderType } from "../utils/types";

export const cartOrderAtom = atom<CartOrderType>({
  key: "cartOrder",
  default: cache.get("cartOrder", {}),
  beforeUpdate(cartOrder) {
    cache.set("cartOrder", cartOrder);
    return cartOrder;
  },
  actions: {
    addOrderNote: (note: string) => {
      cartOrderAtom.update(current => ({ ...current, notes: note }));
      cache.set("cartOrder", { ...cartOrderAtom.value, notes: note });
      return cartOrderAtom.value.notes;
    },
    addCouponCode: (code: string) => {
      cartOrderAtom.update(current => ({ ...current, coupon: code }));
      cache.set("cartOrder", { ...cartOrderAtom.value, coupon: code });
      return cartOrderAtom.value.coupon;
    },
  },
});
