import { setCurrentLocaleCode } from "@mongez/localization";
import { current } from "@mongez/react";
import { Button } from "apps/front-office/design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "apps/front-office/design-system/components/ui/dropdown-menu";
import { cn } from "apps/front-office/design-system/lib/utils";
import { getLocaleCodes } from "apps/front-office/utils/localization";
import { FaAngleDown } from "react-icons/fa";

const languageFlagMap = {
  en: "//demo-uminex.myshopify.com/cdn/shop/t/4/assets/flag_en.png?v=14076981825125011091681116945",
  ar: "//demo-uminex.myshopify.com/cdn/shop/t/4/assets/flag_ar.png?v=87171907108583701081681116939",
};
const LanguageConverter = () => {
  const language = current("localeCode");
  const locales = getLocaleCodes();

  const changeLanguage = (locale: string) => {
    setCurrentLocaleCode(locale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="hover:bg-transparent flex items-center لشح-3">
          <img
            className="h-4 w-5 mx-2"
            src={languageFlagMap[language]}
            alt="Language Flag"
          />
          <span className="text-sm font-medium text-slate-700">
            {language === "en" ? "English" : "العربيه"}
          </span>
          <FaAngleDown className="mx-2 text-slate-600"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map(locale => (
          <DropdownMenuItem
            key={locale.localeCode}
            className={cn("py-1 cursor-pointer flex items-center gap-3 w-full px-0" , 
                locale.localeCode === language? "bg-slate-100 text-slate-900" : "text-slate-700"  ,
                "hover:bg-slate-900 hover:text-slate-100"
  
            )}
            onClick={() => changeLanguage(locale.localeCode)}
            >
            <img
              className="h-4 w-5 mx-2"
              src={languageFlagMap[locale.localeCode]}
              alt="Language Flag"
            />
            <span className="text-sm font-medium text-slate-700">
              {locale.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageConverter;
