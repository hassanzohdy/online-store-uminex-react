import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { Product } from "../../shared/utils/types";
import { addItem, deleteItem } from "../services/compare-services";

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
      const newCompare = await addItem(product.id);
      cache.set("compare", newCompare.data);
      return compareAtom.update(newCompare.data);
    },

    deleteItem: async (itemId: number) => {
      const newCompare = await deleteItem(itemId);
      cache.set("compare", newCompare.data);

      return compareAtom.update(newCompare.data);
    },
  },
});
