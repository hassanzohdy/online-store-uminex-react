import CurrencyConverter from "./components/currency-converter";
import LanguageConverter from "./components/language-converter";

const LanguageCurrencyConverterHeader = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-4 ml-auto">
        <LanguageConverter />
        <CurrencyConverter />
      </div>
    </div>
  );
};

export default LanguageCurrencyConverterHeader;
