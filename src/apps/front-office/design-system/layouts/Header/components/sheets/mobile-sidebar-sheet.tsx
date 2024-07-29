import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Link } from "@mongez/react-router";
import { Button } from "apps/front-office/design-system/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
} from "apps/front-office/design-system/components/ui/dialog";
import { Separator } from "apps/front-office/design-system/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "apps/front-office/design-system/components/ui/sheet";
import { formatNumber } from "apps/front-office/design-system/lib/formats";
import { FaRegHeart } from "react-icons/fa";
import { FiLayers, FiUsers } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";
import WishListSheetSidebar from "./wishlist-sidebar-sheet";
import LanguageConverter from "../language-converter";
import CurrencyConverter from "../currency-converter";
import SearchModel from "apps/front-office/design-system/components/models/search-model";
import CompareModel from "apps/front-office/design-system/components/models/compare-model";


const MobileSidebarSheet = () => {
  const user: any = null;
  const wishListItems = [];
  const compareItems = [];
  const language = current("localeCode");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className="hover:bg-transparent block xl:hidden">
          <GiHamburgerMenu className="h-7 w-7 text-slate-800 " />
        </Button>
      </SheetTrigger>

      <SheetContent side={language === "ar" ? "right" : "left"}>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-start gap-4 my-5">
          <div className="flex flex-col items-center gap-4 justify-center w-full">
            <h1 className="font-semibold text-slate-900 text-lg text-center">
              {trans("searchModelTitle")}
            </h1>
            <SearchModel />
          </div>
          <div className="flex items-start flex-col gap-3 w-full py-5">
            {!user && (
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <FiUsers className="w-4 h-4 mr-2" />
                </div>
                <Link
                  href={"/login"}
                  className="text-[15px] font-medium text-slate-900">
                  {trans("login")}
                </Link>
              </div>
            )}
            {user && (
              <div className="flex items-start gap-4 flex-col">
                <Link
                  href={"/logout"}
                  className="text-[15px] font-medium text-slate-900">
                  <div className="flex items-center">
                    <IoLogOutOutline className="w-4 h-4 mr-2" />
                    {trans("logout")}
                  </div>
                </Link>
                <div className="flex items-center gap-2">
                  {trans("welcomeBack", {
                    name: (
                      <Link
                        href={"/account"}
                        className="text-[15px] font-medium text-slate-900 underline">
                        {user.username}
                      </Link>
                    ),
                  })}
                </div>
              </div>
            )}
            <Separator className="my-1" />
            <div className="flex items-center gap-1">
              <Link
                href={"/"}
                className="text-[15px] font-medium text-slate-900">
                {trans("home")}
              </Link>
            </div>
            <Separator className="my-1" />
            <div className="flex items-center gap-1">
              <Link
                href={"/collections/all"}
                className="text-[15px] font-medium text-slate-900">
                {trans("shop")}
              </Link>
            </div>
            <Separator className="my-1" />
            <div className="flex items-center gap-1">
              <Link
                href={"/blogs"}
                className="text-[15px] font-medium text-slate-900">
                {trans("blog")}
              </Link>
            </div>
            <Separator className="my-1" />
            <WishListSheetSidebar>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <FaRegHeart className="w-4 h-4 mr-2" />
                </div>
                <h1 className="text-[14px] font-medium text-slate-900">
                  {trans("wishlist")} ( {formatNumber(wishListItems.length)} )
                </h1>
              </div>
            </WishListSheetSidebar>
            <Separator className="my-1" />
            <CompareModel>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <FiLayers className="w-4 h-4 mr-2" />
                </div>
                <h1 className="text-[14px] font-medium text-slate-900 ">
                  {trans("compare")} ( {formatNumber(compareItems.length)} )
                </h1>
              </div>
            </CompareModel>
            <Separator className="my-1" />
            <div className="flex items-center gap-1">
              <Link
                href={"/contact"}
                className="text-[15px] font-medium text-slate-900">
                {trans("contact")}
              </Link>
            </div>
            <Separator className="" />
            <div className="flex items-center gap-1 justify-between w-full">
             <LanguageConverter/>
             <CurrencyConverter/>
            </div>
            <Separator className="" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebarSheet;
