import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Link } from "@mongez/react-router";
import { Button } from "apps/front-office/design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "apps/front-office/design-system/components/ui/dropdown-menu";
import { Separator } from "apps/front-office/design-system/components/ui/separator";
import { cn } from "apps/front-office/design-system/lib/utils";
import { FiMenu } from "react-icons/fi";

const categories = [
  {
    label: "Computer & Desktop",
    value: "computer-desktop",
    url: "/categories/computer-desktop",
  },
  {
    label: "Laptop & Ipad",
    value: "laptop-ipad",
    url: "/categories/laptop-ipad",
  },
  {
    label: "Cameras & Photos",
    value: "cameras-photos",
    url: "/categories/cameras-photos",
  },
  {
    label: "Smart Phones & Tablets",
    value: "smart-phones-tablets",
    url: "/categories/smart-phones-tablets",
  },
  {
    label: "Home & Kitchen",
    value: "home-kitchen",
    url: "/categories/home-kitchen",
  },
  {
    label: "TV & Audios",
    value: "tv-audios",
    url: "/categories/tv-audios",
  },
  {
    label: "Health & Beauty",
    value: "health-beauty",
    url: "/categories/health-beauty",
  },
  {
    label: "Watches & Eyewear",
    value: "watches-eyewear",
    url: "/categories/watches-eyewear",
  },
  {
    label: "Top Deals",
    value: "top-deals",
    url: "/categories/top-deals",
  },
  {
    label: "Top Selling Products",
    value: "top-selling-products",
    url: "/categories/top-selling-products",
  },
  {
    label: "Top Featured Products",
    value: "top-featured-products",
    url: "/categories/top-featured-products",
  },
];

const CategoryList = () => {
  const currentLanguage = current("localeCode");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "flex items-center justify-start w-full max-w-[270px] ",
            "border-slate-200 rounded-none pl-0 hover:bg-transparent",
            currentLanguage === "en"
             ? "border-r-[2px]"
              : "border-l-[2px]"
          )}>
          <FiMenu className="w-5 h-5 mx-2" />
          <span className="text-md font-medium text-slate-700">
            {trans("browse")}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        className="w-[270px] shadow-none pt-2">
        {categories.map(category => (
          <div key={category.value}>
            <DropdownMenuItem
              className="text-[14px] cursor-pointer hover:bg-transparent
             py-1 font-normal text-black">
              <Link href={category.url}>{category.label}</Link>
            </DropdownMenuItem>
            <Separator className="my-2" />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryList;
