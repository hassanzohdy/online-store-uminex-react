import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { addItem, deleteItem } from "../services/compare-services";
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
    addToCompare: async (product: Product) => {
      const compare = compareAtom.value;
      const isProductExists = compare.some(item => item.id === product.id);
      if (isProductExists) {
        return;
      }
      compare.push(product);
      cache.set("compare", compare);
      await addItem(product.id);
      return compareAtom.update(compare);
    },

    deleteItem(itemId: number) {
      const compare = compareAtom.value;
      const updatedCompare = compare.filter(item => item.id !== itemId);
      cache.set("compare", updatedCompare);

      deleteItem(itemId);

      return compareAtom.update(updatedCompare);
    },
  },
});
