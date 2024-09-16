import { trans } from "@mongez/localization";
import { navigateTo, queryString } from "@mongez/react-router";
import { isLTR } from "app/utils/helpers";
import URLS from "app/utils/urls";
import { Button } from "design-system/components/ui/button";
import { Input } from "design-system/components/ui/input";
import { useSearch } from "design-system/hooks/useSearch";
import { cn } from "design-system/lib/utils";
import CategoryMenu from "../category/category-menu";
import SearchResult from "./search-result";

export default function SearchInput() {
  const {
    value,
    category,
    categoryId,
    storeInputValue,
    selectCategory,
    OnClose,
  } = useSearch();

  const params = queryString.toQueryString({ q: value, category: categoryId });

  const handleSearch = () => {
    console.log(category);
    navigateTo(URLS.searchRoute.search("product", params));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2 w-full relative">
      <div
        className={cn(
          "absolute hidden xl:block",
          isLTR() ? "left-0" : "right-0",
        )}>
        <CategoryMenu selectCategory={selectCategory} />
      </div>
      <Input
        placeholder={trans("searchInputPlaceholder")}
        className={cn(
          "border outline-none focus:outline-none focus-visible:ring-0",
          "focus:ring-0 focus:ring-offset-0 inset-y-0 w-full pr-44 h-11",
          isLTR() ? " xl:pl-56 pr-28" : "pr-5 lg:pl-60 xl:pr-60 xl:pl-60",
        )}
        onChange={storeInputValue}
        type="search"
        value={value}
        onKeyDown={handleKeyDown}
      />
      <Button
        variant={"primary"}
        size={"lg"}
        className={cn("absolute", isLTR() ? "right-0" : "left-0")}
        onClick={handleSearch}>
        {trans("searchBtn")}
      </Button>
      <div
        className={cn(
          "absolute top-full left-0 w-full border border-slate-200 z-30",
          value === "" && category === "" && "hidden",
        )}>
        <SearchResult value={value} category={categoryId} OnClose={OnClose} />
      </div>
    </div>
  );
}
