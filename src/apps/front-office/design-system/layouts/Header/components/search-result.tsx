import { Link } from "@mongez/react-router";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { ScrollArea } from "apps/front-office/design-system/components/ui/scroll-area";
import { useEffect, useState } from "react";
import SkeletonCard from "./skeleton-card";

type SearchResultProps = {
  value: string;
};

const SearchResult = ({ value }: SearchResultProps) => {
  const [loading, setLoading] = useState(false);

  const products: { name: string; category: string }[] = [
    { name: "Apple iPhone 13", category: "Smartphones" },
    { name: "Samsung Galaxy S21", category: "Smartphones" },
    { name: "Sony WH-1000XM4 Headphones", category: "Headphones" },
    { name: "Dell XPS 13 Laptop", category: "Laptops" },
    { name: "Nikon D3500 DSLR Camera", category: "Cameras" },
    { name: "Apple MacBook Pro", category: "Laptops" }, // Added more products for testing
    { name: "Samsung Galaxy Buds", category: "Headphones" },
  ];

  const filteredProducts = products.filter(
    product =>
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.category.toLowerCase().includes(value.toLowerCase()),
  );

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <ScrollArea className="w-full h-[380px] bg-white">
      <div className="flex flex-col items-start gap-5 py-5 px-7">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : filteredProducts.length > 0 ? (
          <>
            {filteredProducts.slice(0, 5).map(product => (
              <Link
                href={`#`}
                key={product.name}
                className="text-sm text-gray-600">
                {product.name}
              </Link>
            ))}
            {filteredProducts.length > 5 && (
              <Button
                asChild
                variant={"secondary"}
                onClick={() => {}}
                className="w-full h-12 hover:bg-black hover:text-white transition">
                <Link href="#">View All ({filteredProducts.length - 5})</Link>
              </Button>
            )}
          </>
        ) : (
          <div className="text-sm text-gray-600">
            There are no products matching your keywords
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default SearchResult;
