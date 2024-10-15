import { extend, groupedTranslations } from "@mongez/localization";
import {
  arValidationTranslation,
  enValidationTranslation,
} from "@mongez/react-form";

import aboutTranslation from "shared/localization/about.json";
import accountTranslation from "shared/localization/account.json";
import cartTranslation from "shared/localization/cart.json";
import checkoutTranslation from "shared/localization/checkout.json";
import contactTranslation from "shared/localization/contact.json";
import headerTranslation from "shared/localization/header.json";
import homeTranslation from "shared/localization/home.json";
import indexTranslation from "shared/localization/index.json";
import ShopTranslation from "shared/localization/shop.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(indexTranslation);
groupedTranslations(checkoutTranslation);
groupedTranslations(accountTranslation);
groupedTranslations(homeTranslation);
groupedTranslations(ShopTranslation);
groupedTranslations(cartTranslation);
groupedTranslations(aboutTranslation);
groupedTranslations(contactTranslation);
groupedTranslations(headerTranslation);

extend("en", { validation: enValidationTranslation });
extend("ar", { validation: arValidationTranslation });
