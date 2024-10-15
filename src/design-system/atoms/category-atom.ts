import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { Category } from "shared/utils/types";

export const categoryAtom = atom<Category[]>({
  key: "category",
  default: cache.get("category", []),
  beforeUpdate(category) {
    cache.set("category", category);
    return category;
  },
});
