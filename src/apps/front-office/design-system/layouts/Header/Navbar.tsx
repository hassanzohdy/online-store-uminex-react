import { Link } from "@mongez/react-router";
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
              <Link href="/">Home</Link>
            </li>
            <li className="text-slate-800 text-sm font-semibold hover:hover:text-blue">
              <Link href="/collections/all">Shop</Link>
            </li>
            <div className="relative">
              <li
                className="text-slate-800 text-sm font-semibold hover:hover:text-blue
                 flex items-center cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}>
                Pages
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
                    <Link href="/about">About Us</Link>
                  </li>
                  <li
                    className="text-slate-500 font-medium text-sm hover:text-blue
                   hover:ml-3 transition-all">
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li
                    className="text-slate-500 font-medium text-sm hover:text-blue
                   hover:ml-3 transition-all">
                    <Link href="/terms">Terms & Conditions</Link>
                  </li>
                  <li
                    className="text-slate-500 font-medium text-sm hover:text-blue
                   hover:ml-3 transition-all">
                    <Link href="/team">Our Team</Link>
                  </li>
                </ul>
              )}
            </div>
            <li className="text-slate-800 text-sm font-semibold hover:hover:text-blue">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="text-slate-800 text-sm font-semibold hover:hover:text-blue">
              <Link href="/blogs">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 min-w-[250px]">
          <img src={discountSvg} alt="discount" />
          <span className="text-slate-800 font-semibold hover:text-blue transition">
            Sale $20 Off Your First Order.
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
