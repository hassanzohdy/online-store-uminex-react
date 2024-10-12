import ProductCard from "design-system/components/Products/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "design-system/components/ui/carousel";
import { Product } from "shared/utils/types";

interface CarouselProductsProps {
  products: Product[];
}

export function CarouselProducts({ products }: CarouselProductsProps) {
  return (
    <Carousel className="w-full group/buttons">
      <CarouselContent className="">
        {products.map(product => (
          <CarouselItem
            key={product.id}
            className="max-w-[195px] md:max-w-[235px]">
            <ProductCard key={product.id} product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="z-40 bg-blue/30 hover:bg-blue text-white
       h-12 w-12 hover:text-white border-none left-2 
       lg:-left-5 hidden group-hover/buttons:flex transition-all"
      />
      <CarouselNext
        className="z-40 bg-blue/30 hover:bg-blue text-white
       h-12 w-12 hover:text-white border-none right-2
        lg:-right-5 hidden group-hover/buttons:flex transition-all"
      />
    </Carousel>
  );
}
