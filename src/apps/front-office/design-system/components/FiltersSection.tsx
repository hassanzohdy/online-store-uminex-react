import { trans } from "@mongez/localization";
import { debounce } from "@mongez/reinforcements";
import { useState } from "react";
import { LuX } from "react-icons/lu";

import { isLTR } from "app/utils/helpers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "design-system/components/ui/accordion";
import { Filters } from "design-system/hooks/use-filters";
import { useCategory } from "design-system/hooks/useCategory";
import { FaMinus } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Skeleton } from "./ui/skeleton";

interface FiltersSectionProps {
  updateCategory: (categoryId: number) => void;
  updateInStock: (inStock: boolean) => void;
  updateMinPrice: (minPrice: number) => void;
  updateMaxPrice: (maxPrice: number) => void;
  resetFiltersExceptQuery: () => void;
  filters: Filters;
}

const FiltersSection = ({
  updateCategory,
  updateInStock,
  filters,
  updateMinPrice,
  updateMaxPrice,
  resetFiltersExceptQuery,
}: FiltersSectionProps) => {
  const { data, isLoading } = useCategory();
  const [localMinPrice, setLocalMinPrice] = useState(filters.minPrice || 0);
  const [localMaxPrice, setLocalMaxPrice] = useState(filters.maxPrice || 0);

  const debouncedUpdateMinPrice = debounce((newMinPrice: number) => {
    updateMinPrice(newMinPrice);
  }, 500);

  const debouncedUpdateMaxPrice = debounce((newMaxPrice: number) => {
    updateMaxPrice(newMaxPrice);
  }, 500);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = Number(e.target.value);
    setLocalMinPrice(newMinPrice);
    debouncedUpdateMinPrice(newMinPrice);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = Number(e.target.value);
    setLocalMaxPrice(newMaxPrice);
    debouncedUpdateMaxPrice(newMaxPrice);
  };

  const removeAllFilters = () => {
    resetFiltersExceptQuery();
    setLocalMinPrice(0);
    setLocalMaxPrice(0);
  };

  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={["categories", "price", "availability"]}>
      <div className="col-span-1 p-4 bg-white flex flex-col items-start gap-8 rounded-md w-full">
        <div className="flex flex-col items-start gap-5 w-full">
          {(filters.category ||
            filters.inStock ||
            filters.maxPrice ||
            filters.minPrice) && (
            <Button
              className="bg-red/10 text-red hover:bg-red/20"
              size={"sm"}
              onClick={removeAllFilters}>
              <LuX className="w-3 h-3 mr-1" />
              {trans("Remove Filter")}
            </Button>
          )}
          <AccordionItem value="categories" className=" w-full">
            <AccordionTrigger
              icon={FaMinus}
              className="w-full uppercase text-sm md:text-xs xl:text-sm text-primary font-bold">
              {trans("Product Categories")}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col items-start gap-3">
              {isLoading &&
                Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton key={index} className="w-full h-5" />
                ))}
              {data &&
                data.map(category => (
                  <li
                    onClick={() => updateCategory(category.id)}
                    key={category.id}
                    className="flex items-center gap-2 flex-wrap">
                    <Checkbox
                      id={category.slug}
                      className="border-darkGray w-4 h-4 md:w-3 md:h-3 2xl:w-4 2xl:h-4
                       data-[state=checked]:bg-blue data-[state=checked]:border-blue"
                      checked={category.id === filters.category}
                    />
                    <p className="text-sm md:text-xs 2xl:text-sm font-medium text-primary cursor-pointer">
                      {isLTR()
                        ? category.name.find(n => n.localeCode === "en")?.value
                        : category.name.find(n => n.localeCode === "ar")?.value}
                    </p>
                  </li>
                ))}
            </AccordionContent>
          </AccordionItem>
        </div>
        <AccordionItem value="price" className="w-full">
          <AccordionTrigger
            icon={FaMinus}
            className="uppercase text-sm md:text-xs xl:text-sm text-primary font-bold w-full">
            {trans("Product Price")}
          </AccordionTrigger>
          <AccordionContent className="flex items-center gap-2 w-full flex-nowrap md:flex-wrap xl:flex-nowrap">
            <p className="text-base text-primary">$</p>
            <Input
              id="minPrice"
              type="number"
              onChange={handleMinPriceChange}
              placeholder="From"
              value={localMinPrice?.toString()}
            />
            <Input
              id="maxPrice"
              type="number"
              onChange={handleMaxPriceChange}
              placeholder="To"
              value={localMaxPrice?.toString()}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="availability" className="w-full">
          <AccordionTrigger
            icon={FaMinus}
            className="uppercase text-sm md:text-xs xl:text-sm text-primary font-bold w-full ">
            {trans("Product Availability")}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start gap-3 w-full">
            <li
              onClick={() => updateInStock(true)}
              className="flex items-center gap-2 flex-wrap">
              <Checkbox
                id="inStock"
                className="border-darkGray w-4 h-4 md:w-3 md:h-3 2xl:w-4 2xl:h-4
                 data-[state=checked]:bg-blue data-[state=checked]:border-blue"
                checked={filters.inStock === true}
              />
              <p className="text-sm md:text-xs 2xl:text-sm font-medium text-primary cursor-pointer">
                {trans("In Stock")}
              </p>
            </li>
          </AccordionContent>
        </AccordionItem>
      </div>
    </Accordion>
  );
};

export default FiltersSection;
