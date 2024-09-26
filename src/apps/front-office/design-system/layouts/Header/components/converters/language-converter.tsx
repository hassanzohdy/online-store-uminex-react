import { setCurrentLocaleCode } from "@mongez/localization";
import { current } from "@mongez/react";
import { FaAngleDown } from "react-icons/fa";

import { Button } from "design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "design-system/components/ui/dropdown-menu";
import { cn } from "design-system/lib/utils";

const languageFlagMap = {
  en: "//demo-uminex.myshopify.com/cdn/shop/t/4/assets/flag_en.png?v=14076981825125011091681116945",
  ar: "//demo-uminex.myshopify.com/cdn/shop/t/4/assets/flag_ar.png?v=87171907108583701081681116939",
};

const locales = [
  {
    localeCode: "en",
    name: "English",
  },
  {
    localeCode: "ar",
    name: "العربية",
  },
];

export default function LanguageConverter() {
  const language = current("localeCode");

  let isChangingLocale = false;

  const changeLanguage = (locale: string) => {
    if (isChangingLocale) return;

    const currentLocale = current("localeCode");
    if (currentLocale === locale) return;

    try {
      isChangingLocale = true;
      setCurrentLocaleCode(locale);
    } catch (error) {
      console.error("Failed to change language:", error);
    } finally {
      isChangingLocale = false;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="hover:bg-transparent flex items-center gap-2 px-0 focus:ring-0 focus-visible:ring-0">
          <img
            loading="lazy"
            className="h-3 w-4"
            src={languageFlagMap[language]}
            alt="Language Flag"
          />
          <span className="text-sm font-medium text-gray">
            {language === "en" ? "English" : "العربيه"}
          </span>
          <FaAngleDown className="mx-2 text-gray" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map(locale => (
          <DropdownMenuItem
            key={locale.localeCode}
            className={cn(
              "py-1 cursor-pointer flex items-center gap-3 w-full px-0",
              locale.localeCode === language
                ? "bg-lightGray text-slate-900"
                : "text-gray",
              "hover:bg-slate-900 hover:text-slate-100",
            )}
            onClick={() => changeLanguage(locale.localeCode)}>
            <img
              loading="lazy"
              className="h-4 w-5 mx-2"
              src={languageFlagMap[locale.localeCode]}
              alt="Language Flag"
            />
            <span className="text-sm font-semibold text-gray">
              {locale.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
