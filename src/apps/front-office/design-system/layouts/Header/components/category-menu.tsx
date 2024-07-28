import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "apps/front-office/design-system/components/ui/dropdown-menu";
import { FaAngleDown } from "react-icons/fa";
import { useCategories } from "apps/front-office/design-system/hooks/use-categories";

type CategoryMenuProps = {
  selectCategory: (value: string) => void;
};

const CategoryMenu = ({ selectCategory }: CategoryMenuProps) => {
  
  const {categories} = useCategories()

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
        {categories.map(category => (
          <DropdownMenuItem
            key={category.value}
            onClick={() => selectCategoryFunction(category.value)}
            className="text-[14px] cursor-pointer hover:bg-transparent py-1 font-normal text-black">
            {category.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryMenu;
