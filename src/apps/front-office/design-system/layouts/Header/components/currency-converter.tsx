import { trans } from "@mongez/localization";
import { currencyAtom } from "apps/front-office/design-system/atoms/currency-atom";
import { Button } from "apps/front-office/design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "apps/front-office/design-system/components/ui/dropdown-menu";
import { cn } from "apps/front-office/design-system/lib/utils";
import { FaAngleDown } from "react-icons/fa";

const currencySymbolMap = {
  EGP: trans("EGCurrency"),
  USD: "$",
};
const currencyCountryMap = {
  EGP: trans("EG"),
  USD: trans("US"),
};
const CurrencyConverter = () => {
  const currentCurrency = currencyAtom.useValue();

  console.log(currentCurrency);
  const changeCurrency = (currency: string) => {
    currencyAtom.update(currency);
  };

  const currencies = ["USD", "EGP"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="hover:bg-transparent flex items-center gap-1 font-normal">
          {currencyCountryMap[currentCurrency]}(
          <span className="text-sm text-slate-700">{currentCurrency}</span>
          <span className="text-md">{currencySymbolMap[currentCurrency]}</span>
          )
          <FaAngleDown className="mx-2 text-slate-600" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {currencies.map((currency) => (
          <DropdownMenuItem
            key={currency}
            className={cn(
              "py-1 cursor-pointer flex items-center gap-3 w-full px-0",
              currency === currentCurrency
                ? "bg-slate-100 text-slate-900"
                : "text-slate-700",
              
            )}
            onClick={() => changeCurrency(currency)}>
            <Button
              variant={"ghost"}
              className="hover:bg-transparent flex items-center gap-1 font-normal">
              {currencyCountryMap[currency]}(
              <span className="text-sm text-slate-700">{currency}</span>
              <span className="text-md">{currencySymbolMap[currency]}</span>)
            </Button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencyConverter;
