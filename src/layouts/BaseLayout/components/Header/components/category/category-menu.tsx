import { trans } from "@mongez/localization";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

import { categoryAtom } from "design-system/atoms/category-atom";
import { Button } from "design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "design-system/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "design-system/components/ui/select";
import { getCategories } from "design-system/services/category-services";
import { useFetchData } from "shared/hooks/use-fetch-data";
import { cn } from "shared/lib/utils";
import { isLTR } from "shared/utils/helpers";
import { translateText } from "shared/utils/translate-text";

type CategoryMenuProps = {
  selectCategory: (value: string, id: number | null) => void;
};

function CategoryListLoadingComponent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex items-center justify-between w-full max-w-[200px] border-r-2 border-slate-200 rounded-none">
          <span className="text-md font-semibold text-slate-700">
            {trans("allCategories")}
          </span>
          <FaAngleDown className="w-4 h-4 text-slate-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        className="w-[200px] h-[200px] flex items-center justify-center">
        <DropdownMenuItem
          key="loading"
          className="text-[14px] cursor-pointer hover:bg-transparent py-1 font-normal text-black">
          <AiOutlineLoading3Quarters className="animate-spin w-4 h-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function CategoryMenu({ selectCategory }: CategoryMenuProps) {
  const { data, isLoading, error } = useFetchData(getCategories);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleValueChange = (value: string) => {
    if (value === trans("allCategories")) {
      setSelectedCategory(null);
      selectCategory("", null);
    } else {
      const selectedCategoryData = data.categories?.find(category =>
        category.name.some(name => name.value === value),
      );
      if (selectedCategoryData) {
        setSelectedCategory(value);
        selectCategory(selectedCategoryData.slug, selectedCategoryData.id);
      }
    }
  };

  if (isLoading) {
    return <CategoryListLoadingComponent />;
  }

  if (error) {
    return <div className="text-red-500">Something went wrong</div>;
  }

  categoryAtom.update(data?.categories);

  return (
    <Select
      onValueChange={handleValueChange}
      value={selectedCategory || trans("allCategories")}>
      <SelectTrigger
        className={cn(
          "w-[200px] border-0 focus:ring-0 font-semibold",
          "shadow-none rounded-none text-sm max-w-[170px] xl:max-w-[180px] 2xl:max-w-[200px]",
          isLTR() ? "xl:pl-6 border-r" : "border-l",
        )}>
        <SelectValue placeholder={trans("allCategories")} />
      </SelectTrigger>
      <SelectContent
        side="bottom"
        align={isLTR() ? "start" : "end"}
        className="max-w-[170px] xl:max-w-[180px] 2xl:max-w-[200px] border-0 z-50">
        <SelectGroup
          className="text-[14px] cursor-pointer hover:bg-transparent py-1
           font-normal text-black line-clamp-2">
          <SelectItem
            value={trans("allCategories")}
            className="text-[14px] cursor-pointer hover:bg-transparent py-1 font-normal text-black">
            {trans("allCategories")}
          </SelectItem>
          {data?.categories?.map(category => {
            const categoryName = translateText(category.name);

            return (
              <SelectItem
                key={category.id}
                value={categoryName!}
                className="text-[14px] cursor-pointer hover:bg-transparent py-1 font-normal text-black">
                {categoryName}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
