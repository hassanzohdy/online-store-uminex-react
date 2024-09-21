import { Link } from "@mongez/react-router";
import { BiHomeAlt2, BiStore } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

import URLS from "app/utils/urls";
import { modalAtom } from "design-system/atoms/model-atom";

export default function ResponsiveNavbar() {
  return (
    <div className="fixed bottom-0 lg:hidden w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-0 md:px-4 py-5 relative">
        <div className="flex items-center justify-evenly gap-2 md:gap-5 w-full">
          <Link href={URLS.home}>
            <BiHomeAlt2 className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
          <Link href={URLS.collections}>
            <BiStore className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
        </div>
        <div
          className="absolute -top-6 left-[50%] -translate-x-[50%] border-4 border-white shadow-md rounded-full bg-blue text-white
         h-16 w-16 flex items-center justify-center">
          <IoCartOutline
            className="w-6 h-6 sm:w-7 sm:h-7"
            onClick={() => modalAtom.onOpen("cart")}
          />
        </div>
        <div className="flex items-center justify-evenly gap-2 md:gap-5 w-full">
          <FaRegHeart
            className="w-6 h-6 sm:w-7 sm:h-7"
            onClick={() => modalAtom.onOpen("wishlist")}
          />
          <Link href={URLS.auth.root}>
            <FaRegUser className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
        </div>
      </div>
    </div>
  );
}
