import { groupedTranslations, localizationEvents, trans } from "@mongez/localization";
import { changeLocaleCode } from "@mongez/react-router";
import AuthTranslation from "shared/localization/auth.json";
import ButtonsTranslation from "shared/localization/buttons.json";
import cartAndWishlistTranslation from "shared/localization/cart-wishlist.json";
import IndexTranslation from "shared/localization/index.json";
import InputsTranslation from "shared/localization/inputs.json";
import ModelsTranslation from "shared/localization/models.json";
import NavbarTranslation from "shared/localization/navbar.json";
import ProductsTranslation from "shared/localization/products.json";
import CurrencyTranslation from "shared/localization/currency.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(cartAndWishlistTranslation);
groupedTranslations(NavbarTranslation);
groupedTranslations(ButtonsTranslation);
groupedTranslations(AuthTranslation);
groupedTranslations(IndexTranslation);
groupedTranslations(ModelsTranslation);
groupedTranslations(InputsTranslation);
groupedTranslations(ProductsTranslation);
groupedTranslations(CurrencyTranslation);

// useful for Arabic language, if not needed you can remove it
export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  // add your common localization here
});

localizationEvents.onChange("localeCode" , (newLocal)=>{
  changeLocaleCode(newLocal);
})