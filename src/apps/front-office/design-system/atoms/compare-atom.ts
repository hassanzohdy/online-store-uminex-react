import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { deleteItem } from "../services/compare-services";
import { Compare } from "../utils/types";

export const compareAtom = atom<Compare>({
  key: "compare",
  default: cache.get("compare", {}),
  beforeUpdate(compare) {
    cache.set("compare", compare);
    return compare;
  },
  actions: {
    refresh() {
      compareAtom.update(compareAtom.value);
    },

    deleteItem(itemId: number) {
      const compare = compareAtom.value;
      compare.products = compare.products.filter(item => item.id !== itemId);
      cache.set("compare", compare);
      deleteItem(itemId);
      return compareAtom.update(compare);
    },
  },
});
