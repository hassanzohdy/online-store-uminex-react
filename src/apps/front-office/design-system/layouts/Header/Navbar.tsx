import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "app/utils/urls";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import discountSvg from "shared/assets/images/discount.svg";
import CategoryLists from "./components/category/category-list";
import SearchInput from "./components/search/search-input";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full py-[7px] relative">
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex items-center gap-4 w-full">
          <CategoryLists />
          <ul className="flex items-center gap-6 ml-5">
            <li className="text-black text-sm font-semibold hover:hover:text-blue">
              <Link href={URLS.home}>{trans("home")}</Link>
            </li>
            <li className="text-black text-sm font-semibold hover:hover:text-blue">
              <Link href={URLS.collections}>{trans("shop")}</Link>
            </li>
            <div className="relative">
              <li
                className="text-black text-sm font-semibold hover:hover:text-blue
                 flex items-center cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}>
                {trans("pages")}
                <FaAngleDown className="w-3 h-3 text-slate-600 ml-2" />
              </li>
              {isOpen && (
                <ul
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  className="absolute left-0 top-5 bg-white rounded-md p-4
                   shadow-md w-[200px] flex flex-col items-start gap-3 z-50">
                  <li
                    className="text-slate-500 font-semibold text-sm hover:text-blue
                   hover:ml-3 transition-all">
                    <Link href={URLS.pages.aboutUs}>{trans("about")}</Link>
                  </li>
                  <li
                    className="text-slate-500 font-semibold text-sm hover:text-blue
                   hover:ml-3 transition-all">
                    <Link href={URLS.pages.faq}>{trans("faq")}</Link>
                  </li>
                  <li
                    className="text-slate-500 font-semibold text-sm hover:text-blue
                   hover:ml-3 transition-all">
                    <Link href={URLS.pages.termsConditions}>
                      {trans("terms")}
                    </Link>
                  </li>
                  <li
                    className="text-slate-500 font-semibold text-sm hover:text-blue
                   hover:ml-3 transition-all">
                    <Link href={URLS.pages.team}>{trans("team")}</Link>
                  </li>
                </ul>
              )}
            </div>
            <li className="text-black text-sm font-semibold hover:hover:text-blue">
              <Link href={URLS.contactUs}>{trans("contact")}</Link>
            </li>
            <li className="text-black text-sm font-semibold hover:hover:text-blue">
              <Link to={URLS.blog.root}>{trans("blog")}</Link>
            </li>
            <li className="text-slate-800 text-sm font-semibold hover:hover:text-blue">
              <Link to={URLS.cart}>{trans("cart")}</Link>
            </li>
          </ul>
        </div>
        <div className="hidden xl:flex items-center gap-2 min-w-[250px] ">
          <img src={discountSvg} alt="discount" />
          <span className="text-sm text-black font-semibold hover:text-blue transition">
            {trans("sale")}
          </span>
        </div>
      </div>
      <div className="flex lg:hidden mx-1">
        <SearchInput />
      </div>
    </div>
  );
}
