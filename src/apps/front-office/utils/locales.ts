import { extend, groupedTranslations } from "@mongez/localization";
import {
  arValidationTranslation,
  enValidationTranslation,
} from "@mongez/react-form";

import accountTranslation from "shared/localization/account.json";
import cartTranslation from "shared/localization/cart.json";
import checkoutTranslation from "shared/localization/checkout.json";
import homeTranslation from "shared/localization/home.json";
import indexTranslation from "shared/localization/index.json";
import productDetailsTranslation from "shared/localization/product-details.json";
import productsTranslation from "shared/localization/products.json";
import aboutTranslation from "shared/localization/about.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(indexTranslation);
groupedTranslations(checkoutTranslation);
groupedTranslations(accountTranslation);
groupedTranslations(homeTranslation);
groupedTranslations(productsTranslation);
groupedTranslations(cartTranslation);
groupedTranslations(productDetailsTranslation);
groupedTranslations(aboutTranslation);

extend("en", { validation: enValidationTranslation });
extend("ar", { validation: arValidationTranslation });
