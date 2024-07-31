import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import discountSvg from "shared/assets/images/discount.svg";
import CategoryList from "./components/category-list";
import SearchInput from "./components/search-input";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full py-5">
      <div className="hidden xl:flex items-center justify-between">
        <div className="flex items-center gap-4 w-full">
          <CategoryList />
          <ul className="flex items-center gap-8">
            <li className="text-slate-800 text-sm font-semibold hover:hover:text-blue">
              <Link href="/">{trans("home")}</Link>
            </li>
            <li className="text-slate-800 text-sm font-semibold hover:hover:text-blue">
              <Link href="/collections/all">{trans("shop")}</Link>
            </li>
            <div className="relative">
              <li
                className="text-slate-800 text-sm font-semibold hover:hover:text-blue
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
                   shadow-md w-[200px] flex flex-col items-start gap-3">
                  <li
                    className="text-slate-500 font-medium text-sm hover:text-blue
                   hover:ml-3 transition-all">
                    <Link href="/about">{trans("about")}</Link>
                  </li>
                  <li
                    className="text-slate-500 font-medium text-sm hover:text-blue
                   hover:ml-3 transition-all">
                    <Link href="/faq">{trans("faq")}</Link>
                  </li>
                  <li
                    className="text-slate-500 font-medium text-sm hover:text-blue
                   hover:ml-3 transition-all">
                    <Link href="/terms">{trans("terms")}</Link>
                  </li>
                  <li
                    className="text-slate-500 font-medium text-sm hover:text-blue
                   hover:ml-3 transition-all">
                    <Link href="/team">{trans("team")}</Link>
                  </li>
                </ul>
              )}
            </div>
            <li className="text-slate-800 text-sm font-semibold hover:hover:text-blue">
              <Link href="/contact">{trans("contact")}</Link>
            </li>
            <li className="text-slate-800 text-sm font-semibold hover:hover:text-blue">
              <Link to={URLS.blog.root}>{trans("blog")}</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 min-w-[250px]">
          <img src={discountSvg} alt="discount" />
          <span className="text-slate-800 font-semibold hover:text-blue transition">
            {trans("sale")}
          </span>
        </div>
      </div>
      <div className="flex xl:hidden ">
        <SearchInput />
      </div>
    </div>
  );
};

export default Navbar;
