import { current } from "@mongez/react";
import { currencyAtom } from "../atoms/currency-atom";

export const formatPrice = (price: number) => {
  const language = current("localeCode");
  const currency = currencyAtom.useValue();
  const format = language === "en" ? "en-US" : "ar-EG";

  return new Intl.NumberFormat(format, {
    style: "currency",
    currency: currency,
  }).format(price);
};

export const formatNumber = (number: number) => {
  const language = current("localeCode");
  const format = language === "en" ? "en-US" : "ar-EG";

  return new Intl.NumberFormat(format).format(number);
};
