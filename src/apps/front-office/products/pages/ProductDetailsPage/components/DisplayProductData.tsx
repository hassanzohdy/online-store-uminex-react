import { trans } from "@mongez/localization";
import { Button } from "design-system/components/ui/button";
import { Separator } from "design-system/components/ui/separator";
import { formatPrice } from "design-system/lib/formats";
import { Product } from "design-system/utils/types";
import { FaRecycle, FaRegHeart } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { LuShip } from "react-icons/lu";

import { Link } from "@mongez/react-router";
import { useProductActions } from "app/products/hooks/useProductActions";
import { translateText } from "app/products/utils/translate-text";
import URLS from "app/utils/urls";
import { Checkbox } from "design-system/components/ui/checkbox";
import HandleProductQuantity from "./HandleProductQuantity";
import Rating from "./Rating";
import ShareModel from "./ShareModel";

interface DisplayProductDataProps {
  product: Product;
}

export default function DisplayProductData({
  product,
}: DisplayProductDataProps) {
  const {
    addToCompare,
    addToWishlist,
    goToCheckout,
    handleCheckboxChange,
    isChecked,
    estimatedDelivery,
  } = useProductActions(product);

  const link = `${window.location.origin}${URLS.products.view(product.id)}`;

  return (
    <div className="flex flex-col items-start gap-5">
      <h1 className="text-primary text-lg lg:text-[24px] font-medium">
        {translateText(product.name)}
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
          {translateText(product.shortDescription)}
        </p>

        <HandleProductQuantity product={product} />
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
            {translateText(product.category.name)}
          </Link>
        </div>
        {product.brand && (
          <div className="flex items-center justify-between w-full text-sm text-gray font-medium">
            <h1>{trans("Brand")}:</h1>
            <p className="text-gray">{translateText(product.brand.name)}</p>
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
