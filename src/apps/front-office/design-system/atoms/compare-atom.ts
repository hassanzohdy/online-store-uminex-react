import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { deleteItem } from "../services/compare-services";

export const compareAtom = atom({
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
      compare.totalCompare -= 1;
      compare.products = compare.products.filter(item => item.id !== itemId);
      cache.set("compare", compare);
      deleteItem(itemId);
      return compareAtom.update(compare);
    },
  },
});
