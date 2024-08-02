import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import {
  CheckIcon,
  Cross1Icon,
  HeartIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { FaRegEye } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";

type TProduct = {
  title: string;
  image: string[];
  priceBefore: number;
  priceAfter?: number;
  rate: number;
  customStyle?: string;
  reviews: number;
  path: string;
  hotDeals?: boolean;
  availableQuantity: number;
  totalQuantityinStock?: number;
};
export default function ProductCard({
  customStyle,
  priceBefore,
  rate,
  title,
  image,
  priceAfter,
  path,
  reviews,
  hotDeals = false,
  availableQuantity,
  totalQuantityinStock,
}: TProduct) {
  let discount = 0;
  if (priceAfter && priceBefore) {
    discount = Math.round(((priceBefore - priceAfter) * 100) / priceBefore);
    console.log(discount);
  }
  return (
    <div
      className={`group  bg-white  relative  p-2 md:p-4 rounded h-auto ${hotDeals ? "md:h-[415px]" : "md:h-[405px]"}  ${hotDeals ? "lg:h-[350px]" : "lg:h-[340px]"} cursor-pointer overflow-hidden ${customStyle}`}>
      {discount > 0 && (
        <div className="absolute  left-3 md:left-4   top-3 md:top-5   w-10 md:w-14 h-6 bg-[#dd3842] z-20 flex items-center justify-center">
          <span className=" text-white text-xs font-semibold">{discount}%</span>
        </div>
      )}
      <div className="absolute right-5 z-20 xl:translate-y-6  opacity-100 xl:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="group/wishlist  size-9 flex items-center justify-center rounded-full shadow mb-2 hover:bg-blue transition-all duration-300">
          <HeartIcon className="size-4 group-hover/wishlist:text-white transition-all duration-300" />
          <p className="inline-block pointer-events-none absolute bg-primary text-white right-11 text-xs px-2 py-1 rounded-sm w-max opacity-0 group-hover/wishlist:opacity-100 translate-x-2 group-hover/wishlist:translate-x-0 transition-all duration-500 after:content-[''] after:-right-2 after:top-1/2 after:-translate-y-1/2 after:size-2 after:bg-primary after:absolute after:clip-triangle after:rotate-90">
            Add Wishlist
          </p>
        </div>
        <div className="hidden  group/show size-9 xl:flex items-center justify-center rounded-full shadow  hover:bg-blue transition-all duration-300">
          <FaRegEye className="size-4 group-hover/show:text-white transition-all duration-300" />
          <p className="inline-block  pointer-events-none  absolute bg-primary text-white right-11 text-xs px-2 py-1 rounded-sm w-max opacity-0 group-hover/show:opacity-100 translate-x-2 group-hover/show:translate-x-0 transition-all duration-500 after:content-[''] after:-right-2 after:top-1/2 after:-translate-y-1/2 after:size-2 after:bg-primary after:absolute after:clip-triangle after:rotate-90">
            Quick View
          </p>
        </div>
        <div className="hidden  group/compare size-9 xl:flex items-center justify-center rounded-full shadow  hover:bg-blue transition-all duration-300">
          <IoGitCompare className="size-4 group-hover/compare:text-white transition-all duration-300" />
          <p className="inline-block  pointer-events-none  absolute bg-primary text-white right-11 text-xs px-2 py-1 rounded-sm w-max opacity-0 group-hover/compare:opacity-100 translate-x-2 group-hover/compare:translate-x-0 transition-all duration-500 after:content-[''] after:-right-2 after:top-1/2 after:-translate-y-1/2 after:size-2 after:bg-primary after:absolute after:clip-triangle after:rotate-90">
            Add Compare
          </p>
        </div>
      </div>
      <div className="relative mx-auto w-full flex justify-center">
        <img
          className=" w-full md:max-w-48 z-10  aspect-square opacity-100 hover:opacity-0 transition-opacity duration-300 ease-out"
          src={image[0]}
          alt=""
        />
        <img
          className="absolute w-full md:max-w-48 aspect-square "
          src={image[1]}
          alt=""
        />
      </div>
      <div className="bg-white z-20  relative  lg:group-hover:-translate-y-16 transition-all duration-500 py-1 text-left">
        <Link
          to={path}
          className="line-clamp-2 h-10 mt-2 leading-5 font-semibold text-sm hover:text-blue  transition-colors duration-200">
          {title}
        </Link>
        <div className="flex items-center gap-1">
          <span className="flex">
            {Array(Math.min(Math.abs(rate), 5))
              .fill(0)
              .map((_, i) => (
                <StarFilledIcon
                  key={i}
                  className="text-yellow size-3 md:size-4"
                />
              ))}
            {Array(Math.max(0, 5 - Math.abs(rate)))
              .fill(0)
              .map((_, i) => (
                <StarIcon key={i} className="text-yellow size-3 md:size-4" />
              ))}
          </span>
          <p className=" text-gray text-xs">{`${reviews} review${reviews > 1 ? "s" : ""}`}</p>
        </div>
        {priceBefore && priceAfter ? (
          <div className="flex gap-2 items-end">
            <span className="text-secondary font-semibold text-lg">
              ${priceAfter}
            </span>
            <span className="text-darkGray line-through text-sm ">
              ${priceBefore}
            </span>
          </div>
        ) : (
          <span className="text-lg text-blue font-semibold">
            ${priceBefore}
          </span>
        )}

        <div className="flex items-center gap-2 mt-2">
          {hotDeals && totalQuantityinStock ? (
            <div className="w-full flex flex-col gap-1 mt-1">
              <div className="w-full bg-[#eee] rounded-full h-2 dark:bg-gray-700">
                <div
                  className="bg-red h-2 rounded-full"
                  style={{
                    width: `${((totalQuantityinStock - availableQuantity) / totalQuantityinStock) * 100}%`,
                  }}></div>
              </div>
              <p className="text-[#79819c] font-semibold text-sm">
                Sold:
                <span className="text-primary font-semibold">
                  {` ${totalQuantityinStock - availableQuantity}/${totalQuantityinStock} `}
                </span>
                products
              </p>
            </div>
          ) : availableQuantity > 0 ? (
            <>
              <CheckIcon className="text-green size-5" />
              <p className="text-green text-sm">{trans("in stock")}</p>
            </>
          ) : (
            <>
              <Cross1Icon className="text-red size-3" />
              <p className="text-red text-sm">{trans("out stock")}</p>
            </>
          )}
        </div>
        <button
          className={`w-full h-8 md:h-10 rounded-full ${availableQuantity > 0 ? "bg-blue" : "bg-red"} font-semibold text-white opacity-100 text-xs md:text-sm mt-4 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-700`}>
          {availableQuantity > 0 ? "Add To Cart" : "Out Of Stock"}
        </button>
      </div>
    </div>
  );
}
