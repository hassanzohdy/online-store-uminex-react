import { formatPrice } from "shared/lib/formats";
import { translateText } from "shared/utils/translate-text";
import { Product } from "shared/utils/types";
import HandleProductQuantity from "./HandleProductQuantity";

interface StickyAddToCartProps {
  product: Product;
}

export default function StickyAddToCart({ product }: StickyAddToCartProps) {
  return (
    <div className="hidden lg:block fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 w-full border border-t-slate-200">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto">
        <div className="flex items-start gap-3">
          <img
            loading="lazy"
            src={product.images[0].url}
            alt={""}
            className="w-16 h-16 object-cover border border-slate-300 rounded-md p-1"
          />
          <div className="flex flex-col items-start gap-1 w-full max-w-[350px]">
            <h1 className="text-primary font-bold text-sm line-clamp-2">
              {translateText(product.name)}
            </h1>
            {product.price && product.salePrice ? (
              <div className="flex gap-3 items-end">
                <span className="text-blue font-semibold text-md">
                  {formatPrice(product.salePrice)}
                </span>
                <span className="text-darkGray line-through text-dm ">
                  {formatPrice(product.price)}
                </span>
              </div>
            ) : (
              <span className="text-md text-blue font-semibold">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
        </div>
        <div className="w-full max-w-[500px]">
          <HandleProductQuantity product={product} />
        </div>
      </div>
    </div>
  );
}
