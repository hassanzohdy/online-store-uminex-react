import { trans } from "@mongez/localization";
import { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { TfiLayoutGrid4 } from "react-icons/tfi";

import { Filters } from "design-system/hooks/use-filters";
import { cn } from "design-system/lib/utils";
import { SORT_OPTIONS } from "design-system/utils/data";
import { Product } from "design-system/utils/types";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import FiltersSection from "./FiltersSection";
import FiltersSidebarSheet from "./FiltersSidebarSheet";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";

type paginationInfoType = {
  limit: number;
  page: number;
  pages: number;
  result: number;
  total: number;
};

interface ProductsListProps {
  products: Product[];
  updateCategory: (categoryId: number) => void;
  updateInStock: (inStock: boolean) => void;
  updateMinPrice: (minPrice: number) => void;
  updateMaxPrice: (maxPrice: number) => void;
  updateSortOptions: (sort: string) => void;
  updatePageNumber: (page: number) => void;
  resetFiltersExceptQuery: () => void;
  filters: Filters;
  paginationInfo: paginationInfoType;
}

export default function ProductsList({
  products,
  filters,
  updateCategory,
  updateInStock,
  updateMinPrice,
  updateMaxPrice,
  updateSortOptions,
  resetFiltersExceptQuery,
  updatePageNumber,
  paginationInfo,
}: ProductsListProps) {
  const [gridLayout, setGridLayout] = useState<number>(4);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSortOptions(e.target.value);
  };

  const handleGridLayoutChange = (columns: number) => {
    setGridLayout(columns);
  };

  console.log(paginationInfo);
  return (
    <>
      <div className="w-full p-3 text-right bg-white rounded-md mt-4 hidden md:flex items-center justify-end gap-4">
        <label htmlFor="sort" className="text-sm text-gray font-medium">
          {trans("Sort By")}:{" "}
        </label>
        <select
          id="sort"
          value={filters.sort}
          onChange={handleSortChange}
          className="text-sm font-medium ring-0 focus:ring-0 focus-visible:ring-0">
          {SORT_OPTIONS.map(option => (
            <option
              key={option.value}
              value={option.value}
              className="text-primary">
              {option.name}
            </option>
          ))}
        </select>
        <p className="text-darkGray text-sm font-medium">
          {paginationInfo.total} {trans("Results")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 w-full gap-5">
        <div className="hidden md:block">
          <FiltersSection
            filters={filters}
            updateCategory={updateCategory}
            updateMaxPrice={updateMaxPrice}
            updateMinPrice={updateMinPrice}
            updateInStock={updateInStock}
            resetFiltersExceptQuery={resetFiltersExceptQuery}
          />
        </div>

        <div className="col-span-1 md:col-span-4 w-full">
          <div className="hidden md:flex items-center justify-between gap-2 flex-wrap w-full bg-white p-3 rounded-md mb-1">
            {products.length > 0 && paginationInfo && (
              <div className="text-darkGray">
                {trans("showing")}{" "}
                <span>
                  {(paginationInfo.page - 1) * paginationInfo.limit + 1} -{" "}
                  {Math.min(
                    paginationInfo.page * paginationInfo.limit,
                    paginationInfo.total,
                  )}{" "}
                  {trans("of")} {paginationInfo.total}
                </span>
              </div>
            )}

            <div className="items-center gap-2 hidden 2xl:flex ml-auto">
              <TbGridDots
                className={cn(
                  "w-8 h-8 p-1 text-darkGray cursor-pointer hover:bg-lightGray",
                  gridLayout === 3 ? " text-primary" : "",
                )}
                onClick={() => handleGridLayoutChange(3)}
              />
              <TfiLayoutGrid4
                className={cn(
                  "w-8 h-8 p-1 text-darkGray cursor-pointer hover:bg-lightGray",
                  gridLayout === 4 ? " text-primary" : "",
                )}
                onClick={() => handleGridLayoutChange(4)}
              />
            </div>
          </div>

          <div className="flex md:hidden items-center justify-between bg-white p-5 my-5">
            <FiltersSidebarSheet
              filters={filters}
              resetFiltersExceptQuery={resetFiltersExceptQuery}
              updateCategory={updateCategory}
              updateInStock={updateInStock}
              updateMaxPrice={updateMaxPrice}
              updateMinPrice={updateMinPrice}
              paginationInfo={paginationInfo}
              updateSortOptions={updateSortOptions}
            />
            <h1 className="text-sm text-primary">
              {paginationInfo.total} {trans("Products")}
            </h1>
          </div>

          <div
            className={`2xl:${
              gridLayout === 3
                ? "2xl:grid 2xl:gap-y-1 2xl:grid-cols-3"
                : "2xl:grid 2xl:gap-y-1 2xl:grid-cols-4"
            } flex items-center justify-center flex-wrap gap-1`}>
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  oneRow
                  grid={gridLayout}
                />
              ))
            ) : (
              <p className="text-center col-span-full mt-5 italic">
                {trans("No products found.")}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center gap-2 text-white mt-4 w-full">
            <Button
              variant={"outline"}
              onClick={() => updatePageNumber(filters.page - 1)}
              disabled={paginationInfo.page === 1}>
              <span className="block md:hidden">
                <FaArrowLeftLong className="w-3 h-3" />
              </span>
              <span className="hidden md:block">Previous</span>
            </Button>
            <div
              className="max-w-[300px] md:max-w-[470px] overflow-x-auto flex items-center gap-1"
              style={{ scrollbarWidth: "none" }}>
              {Array.from({ length: paginationInfo.pages }).map((_, index) => (
                <Button
                  key={index}
                  onClick={() => updatePageNumber(index + 1)}
                  className="w-14"
                  variant={filters.page === index + 1 ? "primary" : "outline"}>
                  {index + 1}
                </Button>
              ))}
            </div>
            <Button
              variant={"outline"}
              onClick={() => updatePageNumber(filters.page + 1)}
              disabled={paginationInfo.pages <= paginationInfo.page}>
              <span className="block md:hidden">
                <FaArrowRightLong className="w-3 h-3" />
              </span>
              <span className="hidden md:block">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
