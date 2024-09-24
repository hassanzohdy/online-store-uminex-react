import { formatPrice } from "design-system/lib/formats";
import { Product } from "design-system/utils/types";
import { translateText } from "app/products/utils/translate-text";
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
            src={product.images[0].url}
            alt={""}
            className="w-16 h-16 object-cover border border-slate-300 rounded-md p-1"
          />
          <div className="flex flex-col items-start gap-1 w-full max-w-[350px]">
            <h1 className="text-primary font-bold text-sm line-clamp-2">
              {translateText(product.name)}
            </h1>
            <p className="text-sm text-blue font-semibold">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
        <div className="w-full max-w-[500px]">
          <HandleProductQuantity product={product} />
        </div>
      </div>
    </div>
  );
}
