import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { CheckIcon, Cross1Icon, HeartIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { IoGitCompare } from "react-icons/io5";
import { LuLoader2 } from "react-icons/lu";

import { useProductActions } from "app/products/hooks/useProductActions";
import { translateText } from "app/products/utils/translate-text";
import URLS from "app/utils/urls";
import { formatPrice } from "design-system/lib/formats";
import { cn } from "design-system/lib/utils";
import { Product } from "design-system/utils/types";
import { Button } from "./ui/button";

type TProduct = {
  product: Product;
  oneRow: boolean;
  grid?: number;
};

export default function ProductCard({ product, oneRow, grid }: TProduct) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(product.inWishlist);
  const [isInCompare, setIsInCompare] = useState(product.inCompare);
  const {
    addToCompare,
    addToWishlist,
    handleAddToCart,
    removeFromWishlist,
    removeFromCompare,
  } = useProductActions(product);

  let discount = 0;
  if (product.price && product.salePrice) {
    discount = Math.round(
      ((product.price - product.salePrice) * 100) / product.price,
    );
  }

  const addItemToCart = async () => {
    if (product.inStock) {
      setIsLoading(true);
      handleAddToCart();
    } else {
      return;
    }
    setIsLoading(false);
  };

  const handleAddToWishlist = async () => {
    if (!isInWishlist) {
      setIsLoading(true);
      addToWishlist();
      setIsInWishlist(true);
    }
    setIsLoading(false);
  };

  const handleAddToCompare = async () => {
    if (!isInCompare) {
      setIsLoading(true);
      addToCompare();
      setIsInCompare(true);
    }
    setIsLoading(false);
  };

  const handleRemoveFromWishlist = () => {
    if (isInWishlist) {
      setIsLoading(true);
      removeFromWishlist();
      setIsInWishlist(false);
    }
    setIsLoading(false);
  };

  const handleRemoveFromCompare = () => {
    if (isInCompare) {
      setIsLoading(true);
      removeFromCompare();
      setIsInCompare(false);
    }
    setIsLoading(false);
  };

  return (
    <div
      className={cn(
        "group  bg-white  relative  p-2 md:p-4 rounded max-w-[190px] md:min-w-[230px] cursor-pointer overflow-hidden",
        oneRow && "max-h-[400px] md:h-[415px] lg:h-[400px]",
        !oneRow && "md:h-[405px] lg:h-[340px]",
        grid === 4 && "w-[230px] md:min-w-[230px] 2xl:min-w-[269px]",
        grid === 3 && "w-[230px] md:min-w-[230px] 2xl:min-w-[359px]",
      )}>
      {discount > 0 && (
        <div className="absolute  left-3 md:left-4   top-3 md:top-5   w-10 md:w-14 h-6 bg-[#dd3842] z-20 flex items-center justify-center">
          <span className=" text-white text-xs font-semibold">{discount}%</span>
        </div>
      )}
      <div className="absolute right-5 z-20 xl:translate-y-6 opacity-100 xl:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div
          className={cn(
            "group/wishlist size-9 flex items-center justify-center rounded-full shadow mb-2 hover:bg-blue transition-all duration-300",
            isInWishlist && "bg-blue text-white",
          )}>
          {isInWishlist ? (
            <>
              <FiCheck
                className="size-4 group-hover/wishlist:text-white transition-all duration-300"
                onClick={handleRemoveFromWishlist}
              />
              <p className="inline-block pointer-events-none absolute bg-primary text-white right-11 text-xs px-2 py-1 rounded-sm w-max opacity-0 group-hover/wishlist:opacity-100 translate-x-2 group-hover/wishlist:translate-x-0 transition-all duration-500 after:content-[''] after:-right-2 after:top-1/2 after:-translate-y-1/2 after:size-2 after:bg-primary after:absolute after:clip-triangle after:rotate-90">
                {trans("Added to Wishlist")}
              </p>
            </>
          ) : (
            <>
              <HeartIcon
                className="size-4 group-hover/wishlist:text-white transition-all duration-300"
                onClick={handleAddToWishlist}
              />
              <p className="inline-block pointer-events-none absolute bg-primary text-white right-11 text-xs px-2 py-1 rounded-sm w-max opacity-0 group-hover/wishlist:opacity-100 translate-x-2 group-hover/wishlist:translate-x-0 transition-all duration-500 after:content-[''] after:-right-2 after:top-1/2 after:-translate-y-1/2 after:size-2 after:bg-primary after:absolute after:clip-triangle after:rotate-90">
                {trans("Add to Wishlist")}
              </p>
            </>
          )}
        </div>
        <Link
          href={URLS.products.view(product.id)}
          className="hidden  group/show size-9 xl:flex items-center justify-center rounded-full shadow  hover:bg-blue transition-all duration-300">
          <FaRegEye className="size-4 group-hover/show:text-white transition-all duration-300" />
          <p className="inline-block pointer-events-none absolute bg-primary text-white right-11 text-xs px-2 py-1 rounded-sm w-max opacity-0 group-hover/show:opacity-100 translate-x-2 group-hover/show:translate-x-0 transition-all duration-500 after:content-[''] after:-right-2 after:top-1/2 after:-translate-y-1/2 after:size-2 after:bg-primary after:absolute after:clip-triangle after:rotate-90">
            {trans("Quick View")}
          </p>
        </Link>
        <div
          className={cn(
            "hidden  group/compare size-9 xl:flex items-center justify-center rounded-full shadow  hover:bg-blue transition-all duration-300",
            isInCompare && "bg-blue text-white",
          )}>
          {isInCompare ? (
            <>
              <FiCheck
                className="size-4 group-hover/compare:text-white transition-all duration-300"
                onClick={handleRemoveFromCompare}
              />
              <p className="inline-block pointer-events-none absolute bg-primary text-white right-11 text-xs px-2 py-1 rounded-sm w-max opacity-0 group-hover/compare:opacity-100 translate-x-2 group-hover/wishlist:translate-x-0 transition-all duration-500 after:content-[''] after:-right-2 after:top-1/2 after:-translate-y-1/2 after:size-2 after:bg-primary after:absolute after:clip-triangle after:rotate-90">
                {trans("Added to Compare")}
              </p>
            </>
          ) : (
            <>
              <IoGitCompare
                className="size-4 group-hover/compare:text-white transition-all duration-300"
                onClick={handleAddToCompare}
              />
              <p className="inline-block  pointer-events-none  absolute bg-primary text-white right-11 text-xs px-2 py-1 rounded-sm w-max opacity-0 group-hover/compare:opacity-100 translate-x-2 group-hover/compare:translate-x-0 transition-all duration-500 after:content-[''] after:-right-2 after:top-1/2 after:-translate-y-1/2 after:size-2 after:bg-primary after:absolute after:clip-triangle after:rotate-90">
                {trans("Add to Compare")}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="relative mx-auto w-full flex items-center justify-center mt-10">
        <img
          className=" w-full h-[170px] lg:h-[200px] md:max-w-48 z-10  aspect-square opacity-100 hover:opacity-0 transition-opacity duration-300 ease-out"
          src={product.images[0].url}
          alt=""
        />
        <img
          className="absolute w-full h-[170px] lg:h-[200px] md:max-w-48 aspect-square "
          src={
            product.images[1] ? product.images[1].url : product.images[0].url
          }
          alt=""
        />
      </div>
      <div className="bg-white z-20 relative translate-y-[50px] group-hover:-translate-y-6 lg:translate-y-6 lg:group-hover:-translate-y-16 transition-all duration-500 py-1 text-left">
        <Link
          to={URLS.products.view(product.id)}
          className="line-clamp-2 h-10 mt-2 leading-5 font-semibold text-sm hover:text-blue  transition-colors duration-200">
          {translateText(product.name)}
        </Link>
        {product.price && product.salePrice ? (
          <div className="flex gap-2 items-end">
            <span className="text-secondary font-semibold text-lg">
              {formatPrice(product.salePrice)}
            </span>
            <span className="text-darkGray line-through text-sm ">
              {formatPrice(product.price)}
            </span>
          </div>
        ) : (
          <span className="text-lg text-blue font-semibold">
            {formatPrice(product.price)}
          </span>
        )}

        <div className="flex items-center gap-2 mt-2">
          {product.inStock ? (
            <>
              <CheckIcon className="text-green size-5" />
              <p className="text-green text-sm">{trans("In Stock")}</p>
            </>
          ) : (
            <>
              <Cross1Icon className="text-red size-3" />
              <p className="text-red text-sm">{trans("Out Of Stock")}</p>
            </>
          )}
        </div>
        <Button
          disabled={isLoading}
          variant={product.inStock ? "primary" : "destructive"}
          onClick={addItemToCart}
          className={`w-full h-8 md:h-10 rounded-full mt-4`}>
          {isLoading ? (
            <LuLoader2 className="w-4 h-4 animate-spin" />
          ) : product.inStock ? (
            trans("Add To Cart")
          ) : (
            trans("Out Of Stock")
          )}
        </Button>
      </div>
    </div>
  );
}
