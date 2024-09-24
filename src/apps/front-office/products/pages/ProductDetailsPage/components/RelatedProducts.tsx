import { trans } from "@mongez/localization";
import { CarouselProducts } from "app/home/components/CarouselProducts";
import { Product } from "design-system/utils/types";

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <div className="flex flex-col gap-1 w-full max-w-[1440px] mx-auto px-4 py-6">
      <h1 className="w-full bg-white p-3 uppercase text-primary font-bold text-md">
        {trans("Related Products")}
      </h1>
      <div className="flex items-start justify-center md:justify-start flex-wrap gap-2">
        <CarouselProducts products={products} oneRow />
      </div>
    </div>
  );
};

export default RelatedProducts;
