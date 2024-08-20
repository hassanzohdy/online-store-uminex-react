import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { Input } from "apps/front-office/design-system/components/ui/input";
import { useSearch } from "apps/front-office/design-system/hooks/useSearch";
import { cn } from "apps/front-office/design-system/lib/utils";
import { isLTR } from "apps/front-office/utils/helpers";
import CategoryMenu from "../category/category-menu";
import SearchResult from "./search-result";

const SearchInput = () => {
  const {
    value,
    category,
    categoryId,
    storeInputValue,
    selectCategory,
    OnClose,
  } = useSearch();

  return (
    <div className="flex items-center gap-2 w-full relative">
      <div
        className={cn(
          "absolute hidden lg:block",
          isLTR() ? "left-0" : "right-0",
        )}>
        <CategoryMenu selectCategory={selectCategory} />
      </div>
      <Input
        placeholder={trans("searchInputPlaceholder")}
        className={cn(
          "border outline-none focus:outline-none focus-visible:ring-0",
          "focus:ring-0 focus:ring-offset-0 inset-y-0 w-full pr-44 h-11",
          isLTR() ? "lg:pl-44 xl:pl-60 pr-28" : "lg:pl-60 xl:pr-60 xl:pl-60",
        )}
        onChange={storeInputValue}
        type="search"
        value={value}
      />
      <Button
        variant={"primary"}
        size={"lg"}
        className={cn("absolute", isLTR() ? "right-0" : "left-0")}>
        {trans("searchBtn")}
      </Button>
      <div
        className={cn(
          "absolute top-full left-0 w-full border border-slate-200 z-50",
          value === "" && category === "" && "hidden",
        )}>
        <SearchResult value={value} category={categoryId} OnClose={OnClose} />
      </div>
    </div>
  );
};

export default SearchInput;
