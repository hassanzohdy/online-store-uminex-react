import {
  groupedTranslations,
  localizationEvents,
  trans,
} from "@mongez/localization";
import { current } from "@mongez/react";
import { changeLocaleCode } from "@mongez/react-router";

import accountTranslation from "shared/localization/account.json";
import checkoutTranslation from "shared/localization/checkout.json";
import indexTranslation from "shared/localization/index.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(indexTranslation);
groupedTranslations(checkoutTranslation);
groupedTranslations(accountTranslation);

// useful for Arabic language, if not needed you can remove it
export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  // add your common localization here
});

localizationEvents.onChange("localeCode", newLocale => {
  const currentLocale = current("localeCode");

  if (newLocale !== currentLocale) {
    changeLocaleCode(newLocale);
  }
});
