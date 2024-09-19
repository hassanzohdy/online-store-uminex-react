import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Button } from "design-system/components/ui/button";
import { Input } from "design-system/components/ui/input";
import { Separator } from "design-system/components/ui/separator";
import { formatPrice } from "design-system/lib/formats";
import { Product } from "design-system/utils/types";
import { FaRecycle, FaRegHeart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiLayers } from "react-icons/fi";
import { LuShip } from "react-icons/lu";

import { Link } from "@mongez/react-router";
import { useProductActions } from "app/products/hooks/useProductActions";
import URLS from "app/utils/urls";
import { Checkbox } from "design-system/components/ui/checkbox";
import Rating from "./Rating";
import ShareModel from "./ShareModel";

interface DisplayProductDataProps {
  product: Product;
}

export default function DisplayProductData({
  product,
}: DisplayProductDataProps) {
  const currentLocale = current("localeCode");
  const {
    addToCompare,
    addToWishlist,
    goToCheckout,
    handleAddToCart,
    handleCheckboxChange,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleQuantityChange,
    isChecked,
    quantity,
    estimatedDelivery,
  } = useProductActions(product, currentLocale);

  const link = `${window.location.origin}${URLS.products.view(product.id)}`;

  return (
    <div className="flex flex-col items-start gap-5">
      <h1 className="text-primary text-lg lg:text-[24px] font-medium">
        {product.name.find(name => name.localeCode === currentLocale)?.value}
      </h1>
      <Rating rating={product.rating || 0} reviews={product.reviews || 0} />
      <Separator />
      <div className="flex flex-col items-start gap-3 w-full">
        {product.price && product.salePrice ? (
          <div className="flex gap-3 items-end">
            <span className="text-blue font-semibold text-[26px]">
              {formatPrice(product.salePrice)}
            </span>
            <span className="text-darkGray line-through text-[18px] ">
              {formatPrice(product.price)}
            </span>
          </div>
        ) : (
          <span className="text-lg text-blue font-semibold">
            {formatPrice(product.price)}
          </span>
        )}
        {product.discount && (
          <p className="text-red text-sm">
            {trans("Discount")}: {formatPrice(product.discount.amount)} (
            {product.discount.percentage}%)
          </p>
        )}
        <p className="text-gray text-base">
          {
            product.shortDescription.find(
              name => name.localeCode === currentLocale,
            )?.value
          }
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-5 my-3">
          <div className="col-span-1 border-[1px] border-slate-200 rounded-full flex items-center py-2 px-5 justify-between">
            <FaMinus
              className="w-4 h-4 mr-1 cursor-pointer text-primary "
              onClick={handleDecreaseQuantity}
            />
            <Input
              type="number"
              value={quantity < 10 ? `0${quantity}` : `${quantity}`}
              className="border-0 focus:ring-0 focus-visible:ring-0 ring-0 ring-offset-0 w-10 h-5 py-0 px-1 
               text-primary font-semibold"
              onChange={handleQuantityChange}
            />
            <FaPlus
              className="w-4 h-4 ml-1 cursor-pointer text-primary "
              onClick={handleIncreaseQuantity}
            />
          </div>
          <div className="col-span-1 md:col-span-3 w-full">
            <Button
              variant={"primary"}
              className="rounded-full h-12 w-full uppercase"
              onClick={handleAddToCart}>
              {trans("Add To Cart")}
            </Button>
          </div>
        </div>
        <div className="flex items-start flex-col gap-3 w-full">
          <div
            className="flex items-center gap-2"
            onClick={handleCheckboxChange}>
            <Checkbox checked={isChecked} id="agree" className="h-3 w-3" />
            <label
              htmlFor="agree"
              className="text-darkGray text-sm font-medium">
              {trans("I agree with")}{" "}
              <Link
                className="text-gray underline italic"
                href={URLS.pages.termsConditions}>
                {trans("Terms & Conditions")}
              </Link>
            </label>
          </div>
          <Button
            variant={"default"}
            className="w-full rounded-full h-12 text-sm uppercase mb-3"
            size={"lg"}
            disabled={!isChecked}
            onClick={goToCheckout}>
            {trans("Buy It Now")}
          </Button>
        </div>
        <div className="flex items-center justify-between w-full text-primary flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-1 text-xs font-semibold uppercase cursor-pointer hover:text-blue"
              onClick={addToWishlist}>
              <FaRegHeart className="w-4 h-4" />
              {trans("Add to Wishlist")}
            </div>
            <div
              className="flex items-center gap-1 text-xs font-semibold uppercase cursor-pointer hover:text-blue"
              onClick={addToCompare}>
              <FiLayers className="w-4 h-4" />
              {trans("Add to Compare")}
            </div>
          </div>
          <ShareModel link={link} />
        </div>
      </div>
      <Separator />
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-2 text-gray">
          <LuShip className="w-5 h-5" />
          <p className="text-sm font-semibold text-gray">{estimatedDelivery}</p>
        </div>
        <div className="flex items-center gap-2 text-gray">
          <FaRecycle className="w-5 h-5" />
          <p className="text-sm font-semibold text-gray">{trans("tax_rule")}</p>
        </div>
      </div>
      <Separator />
      <div className="flex items-start flex-col gap-2 w-full md:w-[280px]">
        <div className="flex items-center justify-between w-full text-sm text-gray font-medium ">
          <h1>{trans("Availability")}:</h1>
          {product.inStock ? (
            <p className="text-emerald-600">{trans("In Stock")}</p>
          ) : (
            <p className="text-red">{trans("Out Of Stock")}</p>
          )}
        </div>
        <div className="flex items-center justify-between w-full text-sm text-gray font-medium">
          <h1>{trans("Category")}:</h1>
          <Link
            href={`${URLS.products.root}?category=${product.category.id}`}
            className="text-primary hover:text-blue">
            {
              product.category.name.find(n => n.localeCode === currentLocale)
                ?.value
            }
          </Link>
        </div>
        {product.brand && (
          <div className="flex items-center justify-between w-full text-sm text-gray font-medium">
            <h1>{trans("Brand")}:</h1>
            <p className="text-gray">
              {
                product.brand.name.find(n => n.localeCode === currentLocale)
                  ?.value
              }
            </p>
          </div>
        )}
        {product.type && (
          <div className="flex items-center justify-between w-full text-sm text-gray font-medium">
            <h1>{trans("Type")}:</h1>
            <p className="text-gray">{product.type}</p>
          </div>
        )}
      </div>
    </div>
  );
}
