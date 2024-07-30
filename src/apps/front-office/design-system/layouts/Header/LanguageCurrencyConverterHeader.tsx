import { trans } from "@mongez/localization";
import CurrencyConverter from "./components/currency-converter";
import LanguageConverter from "./components/language-converter";

const LanguageCurrencyConverterHeader = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <h1 className="text-sm">{trans("studentDiscount")}</h1>
      <div className="flex items-center gap-4">
        <LanguageConverter />
        <CurrencyConverter />
      </div>
    </div>
  );
};

export default LanguageCurrencyConverterHeader;
