import { trans } from "@mongez/localization";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { categoryAtom } from "design-system/atoms/category-atom";
import { Button } from "design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "design-system/components/ui/dropdown-menu";
import { Separator } from "design-system/components/ui/separator";
import { cn } from "shared/lib/utils";
import { isLTR } from "shared/utils/helpers";
import { translateText } from "shared/utils/translate-text";
import URLS from "shared/utils/urls";

export default function CategoryLists() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const data = categoryAtom.value;

  const changeStatus = () => {
    setIsOpen(prev => !prev);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
          {data.map((category, index: number) => {
            const categoryName = translateText(category.name);

            return (
              <a
                href={`${URLS.shop.products}?category=${category.id}&page=1`}
                key={category.id}>
                <DropdownMenuItem
                  className={cn(
                    "text-sm cursor-pointer focus:bg-transparent focus:text-blue font-medium",
                    " text-black border-b-[1px] border-slate-200 py-[10px] px-0",
                    index === data.length - 1 && "border-b-0",
                  )}>
                  {categoryName}
                </DropdownMenuItem>
              </a>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return null;
}
