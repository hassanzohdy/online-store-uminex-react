import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";

export const currencyAtom = atom({
  key: "currency",
  default: cache.get("currency", "USD"),
  beforeUpdate(currency) {
    cache.set("currency", currency);

    return currency;
  },
});
