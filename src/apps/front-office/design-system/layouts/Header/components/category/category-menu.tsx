import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Button } from "apps/front-office/design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "apps/front-office/design-system/components/ui/dropdown-menu";
import { useCategory } from "apps/front-office/design-system/hooks/use-category";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

type CategoryMenuProps = {
  selectCategory: (value: string) => void;
};

const CategoryListLoadingComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex items-center justify-between w-full max-w-[200px] border-r-2 border-slate-200 rounded-none">
          <span className="text-md font-medium text-slate-700">
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
};

const CategoryMenu = ({ selectCategory }: CategoryMenuProps) => {
  const currentLanguage = current("localeCode");

  const { data, isLoading, error } = useCategory();

  if (isLoading) {
    return <CategoryListLoadingComponent />;
  }

  if (error) {
    return <div className="text-red-500">Error loading cart data.</div>;
  }

  if (data) {
    const { categories } = data;

    const selectCategoryFunction = (value: string) => {
      if (value.trim() === "all") {
        selectCategory("");
        return;
      }
      selectCategory(value);
    };

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            className="flex items-center justify-between w-full max-w-[200px] border-r-2 border-slate-200 rounded-none">
            <span className="text-md font-medium text-slate-700">
              {trans("allCategories")}
            </span>
            <FaAngleDown className="w-4 h-4 text-slate-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-[200px]">
          <DropdownMenuItem
            key="all"
            onClick={() => selectCategoryFunction("all")}
            className="text-[14px] cursor-pointer hover:bg-transparent py-1 font-normal text-black">
            {trans("allCategories")}
          </DropdownMenuItem>
          {categories.map(category => {
            const categoryName =
              category.name.find(name => name.localeCode === currentLanguage)
                ?.value || category.name[0].value;

            return (
              <div
                key={category.id}
                onClick={() => selectCategoryFunction(category.slug)}
                className="text-[14px] cursor-pointer hover:bg-transparent py-1 font-normal text-black">
                <DropdownMenuItem className="text-[14px] cursor-pointer hover:bg-transparent py-1 font-normal text-black">
                  {categoryName}
                </DropdownMenuItem>
              </div>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

export default CategoryMenu;
