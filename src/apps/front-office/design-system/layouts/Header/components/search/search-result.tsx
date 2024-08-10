import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Link } from "@mongez/react-router";
import { currencyAtom } from "apps/front-office/design-system/atoms/currency-atom";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { ScrollArea } from "apps/front-office/design-system/components/ui/scroll-area";
import { useProduct } from "apps/front-office/design-system/hooks/use-products";
import { formatPrice } from "apps/front-office/design-system/lib/formats";
import queryString from "query-string";
import URLS from "apps/front-office/utils/urls";
import SkeletonSearchCard from "../SkeletonLoading/skeleton-search-card";
import { Product } from "apps/front-office/design-system/utils/types";

type SearchResultProps = {
  value?: string;
  category?:number | null
};

const SearchResult = ({ value , category }: SearchResultProps) => {

  const params = queryString.stringify({ q:value , category });

  const { data, isLoading } = useProduct(params);
  const currentLanguage = current("localeCode");

  const viewProduct = (id:number) =>{
    URLS.products.view(id)
  }
  return (
    <ScrollArea className="w-full h-[380px] bg-white">
      <div className="flex flex-col items-start gap-5 py-5 px-7">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <SkeletonSearchCard key={index} />
          ))
        ) : data && data.paginationInfo.total > 0 ? (
          <>
            {data.products.slice(0, 5).map((product:Product) => (
              <div
                className="flex items-center gap-4 w-full border-b border-dashed border-slate-300 pb-3"
                key={product.id}
                onClick={()=>viewProduct(product.id)}
                >
                <div className="min-w-16 h-16 cursor-pointer">
                  <img
                    src={product.images[0].url}
                    alt={trans(
                      product.name.find(n => n.localeCode === "en")?.value ||
                        product.name[0].value,
                    )}
                    className="w-full h-full truncate"
                  />
                </div>
                <div className="flex items-start flex-col gap-2">
                  <h1 className="text-[16px] font-medium hover:text-blue cursor-pointer">
                    {currentLanguage === "en"
                      ? product.name.find(n => n.localeCode === "en")?.value
                      : product.name.find(n => n.localeCode === "ar")?.value}
                  </h1>
                  <div className="flex items-center gap-1">
                    {!product.salePrice || product.salePrice === product.price ? (
                      <span className="text-blue font-medium">
                        {formatPrice(product.price, currencyAtom.value)}
                      </span>
                    ) : (
                      <>
                        <span className="text-red font-medium">
                          {formatPrice(product.salePrice, currencyAtom.value)}
                        </span>
                        <span className="line-through text-slate-500">
                          {formatPrice(product.price, currencyAtom.value)}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {data.paginationInfo.total > 5 && (
              <Button
                asChild
                variant={"secondary"}
                onClick={() => {}}
                className="w-full h-12 hover:bg-black hover:text-white transition">
                <Link href="#">
                  {trans("viewAllBtn")} ({data.paginationInfo.total - 5})
                </Link>
              </Button>
            )}
          </>
        ) : (
          <div className="text-base text-slate-600 flex items-center justify-center italic w-full">
            {trans("notFoundProducts")}
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default SearchResult;
