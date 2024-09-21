import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Link } from "@mongez/react-router";
import URLS from "app/utils/urls";
import SearchModel from "design-system/components/models/search-model";
import { Button } from "design-system/components/ui/button";
import { DialogHeader, DialogTitle } from "design-system/components/ui/dialog";
import { Separator } from "design-system/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "design-system/components/ui/sheet";
import { FiUsers } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";
import user from "user";
import CompareModelContainer from "../compare/compare-model-container";
import CurrencyConverter from "../converters/currency-converter";
import LanguageConverter from "../converters/language-converter";
import WishlistSidebarContainer from "../wishlist/wishlist-sidebar-container";

export default function MobileSidebarSheet() {
  const language = current("localeCode");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className="hover:bg-transparent block lg:hidden">
          <GiHamburgerMenu className="h-7 w-7 text-black" />
        </Button>
      </SheetTrigger>

      <SheetContent
        className="w-full lg:max-w-sm"
        side={language === "ar" ? "right" : "left"}>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-start gap-4 my-5">
          <div className="flex flex-col items-center gap-4 justify-center w-full">
            <h1 className="font-semibold text-primary text-lg text-center">
              {trans("searchModelTitle")}
            </h1>
            <SearchModel />
          </div>
          <div className="flex items-start flex-col gap-3 w-full py-5">
            {user.isGuest() && (
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <FiUsers className="w-4 h-4" />
                </div>
                <Link
                  href={URLS.auth.login}
                  className="text-[14px] font-semibold text-primary">
                  {trans("login")}
                </Link>
              </div>
            )}
            {!user.isGuest() && (
              <div className="flex items-start gap-4 flex-col">
                <Link
                  href={"#"}
                  className="text-[14px] font-semibold text-primary">
                  <div className="flex items-center gap-1">
                    <IoLogOutOutline className="w-5 h-5" />
                    {trans("logout")}
                  </div>
                </Link>
                <div className="flex items-center gap-2">
                  {trans("welcomeBack", {
                    name: (
                      <Link
                        href={URLS.auth.root}
                        className="text-[14px] font-semibold text-primary underline">
                        {user.get("name")}
                      </Link>
                    ),
                  })}
                </div>
              </div>
            )}
            <Separator className="my-1" />
            <div className="flex items-center gap-1">
              <Link
                href={URLS.home}
                className="text-[14px] font-semibold text-primary">
                {trans("home")}
              </Link>
            </div>
            <Separator className="my-1" />
            <div className="flex items-center gap-1">
              <Link
                href={URLS.collections}
                className="text-[14px] font-semibold text-primary">
                {trans("shop")}
              </Link>
            </div>
            <Separator className="my-1" />
            <div className="flex items-center gap-1">
              <Link
                href={URLS.blog.root}
                className="text-[14px] font-semibold text-primary">
                {trans("blog")}
              </Link>
            </div>
            <Separator className="my-1" />
            <WishlistSidebarContainer navbar={true} />
            <Separator className="my-1" />
            <CompareModelContainer />
            <Separator className="my-1" />
            <div className="flex items-center gap-1">
              <Link
                href={URLS.contactUs}
                className="text-[14px] font-semibold text-primary">
                {trans("contact")}
              </Link>
            </div>
            <Separator />
            <div className="flex items-center gap-1 justify-between w-full flex-wrap">
              <LanguageConverter />
              <CurrencyConverter />
            </div>
            <Separator />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
