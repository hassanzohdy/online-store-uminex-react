import { current } from "@mongez/react";

export const formatPrice = (price: number) => {
  const language = current("localeCode")
  const format = language === "en" ?  "en-US" : "ar-EG"
  const currency = language === "en" ? "USD" : "EGP"
  
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
