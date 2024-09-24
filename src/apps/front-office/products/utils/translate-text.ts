import { current } from "@mongez/react";
import { LocalizedText } from "design-system/utils/types";

export const translateText = (text: LocalizedText[] | "") => {
  if (text)
    return text.find(n => n.localeCode === current("localeCode"))?.value;
};
