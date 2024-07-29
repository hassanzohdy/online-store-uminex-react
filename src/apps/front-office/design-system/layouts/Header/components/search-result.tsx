import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { ScrollArea } from "apps/front-office/design-system/components/ui/scroll-area";
import SkeletonCard from "./skeleton-header-card";
import { useProducts } from "apps/front-office/design-system/hooks/use-product";

type SearchResultProps = {
  value: string;
};



const SearchResult = ({ value }: SearchResultProps) => {

  const {products , loading} = useProducts(value)

  return (
    <ScrollArea className="w-full h-[380px] bg-white">
      <div className="flex flex-col items-start gap-5 py-5 px-7">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : products.length > 0 ? (
          <>
            {products.slice(0, 5).map(product => (
              <Link
                href={`#`}
                key={product.name}
                className="text-sm text-gray-600">
                {product.name}
              </Link>
            ))}
            {products.length > 5 && (
              <Button
                asChild
                variant={"secondary"}
                onClick={() => {}}
                className="w-full h-12 hover:bg-black hover:text-white transition">
                <Link href="#">
                  {trans("viewAllBtn")} ({products.length - 5})
                </Link>
              </Button>
            )}
          </>
        ) : (
          <div className="text-sm text-gray-600">
            {trans("notFoundProducts")}
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default SearchResult;
