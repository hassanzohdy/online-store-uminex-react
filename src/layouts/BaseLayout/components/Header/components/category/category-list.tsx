import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { Button } from "design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "design-system/components/ui/dropdown-menu";
import { Separator } from "design-system/components/ui/separator";
import { getCategories } from "design-system/services/category-services";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useFetchData } from "shared/hooks/use-fetch-data";
import { cn } from "shared/lib/utils";
import { isLTR } from "shared/utils/helpers";
import { translateText } from "shared/utils/translate-text";

export default function CategoryLists() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { data, isLoading, error } = useFetchData(getCategories);

  const changeStatus = () => {
    setIsOpen(prev => !prev);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (isLoading) {
    return (
      <Button
        variant={"ghost"}
        className={cn(
          "flex items-center justify-start w-full max-w-[270px]",
          "border-slate-200 rounded-none pl-0 hover:bg-transparent",
          isLTR() ? "border-r-[2px]" : "border-l-[2px]",
        )}>
        <FiMenu className="w-5 h-5 mx-2" />
        <span className="text-md font-semibold text-slate-700">
          {trans("browse")}
        </span>
      </Button>
    );
  }

  if (error) {
    return <div className="text-red-500">Error loading cart data.</div>;
  }

  if (data) {
    return (
      <DropdownMenu onOpenChange={changeStatus}>
        <DropdownMenuTrigger asChild>
          <div
            className="w-full max-w-[270px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {(isOpen || isHovered) && (
              <Separator className="bg-blue transition-all h-[1px] absolute top-0 w-full max-w-[270px]" />
            )}
            <Button
              variant={"ghost"}
              className={cn(
                "flex items-center justify-start w-full max-w-[270px]",
                "rounded-none pl-0 hover:bg-transparent",
                isLTR()
                  ? "border-r-[2px] border-slate-200 "
                  : "border-l-[2px] border-slate-200 ",
              )}>
              <FiMenu className="w-5 h-5 mx-2" />
              <span className="text-md font-semibold text-black">
                {trans("browse")}
              </span>
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align={isLTR() ? "start" : "end"}
          className="w-[270px] shadow-md pt-4 px-4 rounded-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {data.categories.map((category, index: number) => {
            const categoryName = translateText(category.name);

            return (
              <Link
                href={`/products?category=${category.id}`}
                key={category.id}>
                <DropdownMenuItem
                  className={cn(
                    "text-sm cursor-pointer focus:bg-transparent focus:text-blue font-medium",
                    " text-black border-b-[1px] border-slate-200 py-[10px] px-0",
                    index === data.length - 1 && "border-b-0",
                  )}>
                  {categoryName}
                </DropdownMenuItem>
              </Link>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return null;
}
