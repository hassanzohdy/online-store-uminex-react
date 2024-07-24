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
import { Link } from "@mongez/react-router";
import { FaRegHeart } from "react-icons/fa";
import { FiLayers, FiUsers } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";
import CompareModel from "../models/compare-model";
import WishListSheetSidebar from "./wishlist-sidebar-sheet";
import SearchModel from "../models/search-model";

const MobileSidebarSheet = () => {
  const user: any = null;
  const wishListItems = [];
  const compareItems = [];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="hover:bg-transparent block xl:hidden">
          <GiHamburgerMenu className="h-7 w-7 text-slate-800 " />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"}>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-start gap-4 my-5">
          <div className="flex flex-col items-center gap-4 justify-center w-full">
            <h1 className="font-semibold text-slate-900 text-lg text-center">
              What Are You Looking For?
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
                  Login/Register
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
                    Logout
                  </div>
                </Link>
                <div className="flex items-center gap-2">
                  Welcome
                  <Link
                    href={"/account"}
                    className="text-[15px] font-medium text-slate-900 underline">
                    {user.username}
                  </Link>
                </div>
              </div>
            )}
            <Separator className="my-2" />
            <div className="flex items-center gap-1">
              <Link
                href={"/"}
                className="text-[15px] font-medium text-slate-900">
                Home
              </Link>
            </div>
            <Separator className="my-2" />
            <div className="flex items-center gap-1">
              <Link
                href={"/collections/all"}
                className="text-[15px] font-medium text-slate-900">
                Shop
              </Link>
            </div>
            <Separator className="my-2" />
            <div className="flex items-center gap-1">
              <Link
                href={"/blogs"}
                className="text-[15px] font-medium text-slate-900">
                Blog
              </Link>
            </div>
            <Separator className="my-2" />
            <WishListSheetSidebar>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <FaRegHeart className="w-4 h-4 mr-2" />
                </div>
                <h1 className="text-[15px] font-medium text-slate-900">
                  WishList ( {wishListItems.length} )
                </h1>
              </div>
            </WishListSheetSidebar>
            <Separator className="my-2" />
            <CompareModel>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <FiLayers className="w-4 h-4 mr-2" />
                </div>
                <h1 className="text-[15px] font-medium text-slate-900 ">
                  Compare ( {compareItems.length} )
                </h1>
              </div>
            </CompareModel>
            <Separator className="my-2" />
            <div className="flex items-center gap-1">
              <Link
                href={"/contact"}
                className="text-[15px] font-medium text-slate-900">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebarSheet;
