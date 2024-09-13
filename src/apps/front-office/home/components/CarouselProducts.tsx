import ProductCard from "design-system/components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "design-system/components/ui/carousel";
import { Product } from "design-system/utils/types";

interface CarouselProductsProps {
  products: Product[];
  oneRow: boolean;
}

export function CarouselProducts({ products, oneRow }: CarouselProductsProps) {
  return (
    <Carousel className="w-full group/buttons">
      <CarouselContent className="">
        {products.map(product => (
          <CarouselItem
            key={product.id}
            className="max-w-[195px] md:max-w-[235px]">
            <ProductCard key={product.id} product={product} oneRow={oneRow} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="z-50 bg-blue/30 hover:bg-blue text-white
       h-12 w-12 hover:text-white border-none left-2 
       lg:-left-5 hidden group-hover/buttons:flex transition-all"
      />
      <CarouselNext
        className="z-50 bg-blue/30 hover:bg-blue text-white
       h-12 w-12 hover:text-white border-none right-2
        lg:-right-5 hidden group-hover/buttons:flex transition-all"
      />
    </Carousel>
  );
}
