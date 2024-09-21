import { trans } from "@mongez/localization";
import ProductCard from "design-system/components/ProductCard";
import { Product } from "design-system/utils/types";

interface WishlistProductsContainerProps {
  products: Product[];
}

export default function WishlistProductsContainer({
  products,
}: WishlistProductsContainerProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <h1 className="w-full bg-white p-3 uppercase text-primary font-bold text-md">
        {trans("Your favorite product")}
      </h1>
      <div className="flex items-start justify-center md:justify-start flex-wrap gap-2">
        {products.map(product => (
          <ProductCard key={product.id} product={product} oneRow />
        ))}
      </div>
    </div>
  );
}
