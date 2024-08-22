import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { deleteItem } from "../services/compare-services";
import { Product } from "../utils/types";

export const compareAtom = atom<Product[]>({
  key: "compare",
  default: cache.get("compare", []),
  beforeUpdate(compare) {
    cache.set("compare", compare);
    return compare;
  },
  actions: {
    refresh() {
      compareAtom.update(compareAtom.value);
    },

    async deleteItem(itemId: number) {
      const compare = compareAtom.value;
      compare.filter(item => item.id !== itemId);
      cache.set("compare", compare);
      await deleteItem(itemId);
      return compareAtom.update(compare);
    },
  },
});
