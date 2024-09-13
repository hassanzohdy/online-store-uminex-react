import { extend, groupedTranslations } from "@mongez/localization";
import {
  arValidationTranslation,
  enValidationTranslation,
} from "@mongez/react-form";

import accountTranslation from "shared/localization/account.json";
import checkoutTranslation from "shared/localization/checkout.json";
import homeTranslation from "shared/localization/home.json";
import indexTranslation from "shared/localization/index.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(indexTranslation);
groupedTranslations(checkoutTranslation);
groupedTranslations(accountTranslation);
groupedTranslations(homeTranslation);

extend("en", { validation: enValidationTranslation });
extend("ar", { validation: arValidationTranslation });
