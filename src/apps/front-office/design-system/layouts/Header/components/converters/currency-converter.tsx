import { trans } from "@mongez/localization";
import { currencyAtom } from "design-system/atoms/currency-atom";
import { Button } from "design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "design-system/components/ui/dropdown-menu";
import { cn } from "design-system/lib/utils";
import { FaAngleDown } from "react-icons/fa";

const CurrencyConverter = () => {
  const currencySymbolMap = {
    EGP: trans("EGCurrency"),
    USD: "$",
  };
  const currencyCountryMap = {
    EGP: trans("EG"),
    USD: trans("US"),
  };
  const currentCurrency = currencyAtom.useValue();
  const changeCurrency = (currency: string) => {
    currencyAtom.update(currency);
  };

  const currencies = ["USD", "EGP"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="hover:bg-transparent flex items-center gap-1 font-normal px-0
           focus:ring-0 focus-visible:ring-0">
          {currencyCountryMap[currentCurrency]}(
          <span className="text-sm text-black">{currentCurrency}</span>
          <span className="text-md">{currencySymbolMap[currentCurrency]}</span>
          )
          <FaAngleDown className="mx-2 text-slate-600" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {currencies.map(currency => (
          <DropdownMenuItem
            key={currency}
            className={cn(
              "py-1 cursor-pointer flex items-center gap-3 w-full px-0 font-semibold",
              currency === currentCurrency ? "text-blue" : "text-black",
            )}
            onClick={() => changeCurrency(currency)}>
            <Button
              variant={"ghost"}
              className="hover:bg-transparent flex items-center gap-1">
              {currencyCountryMap[currency]}(
              <span className="text-sm">{currency}</span>
              <span className="text-md">{currencySymbolMap[currency]}</span>)
            </Button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencyConverter;
