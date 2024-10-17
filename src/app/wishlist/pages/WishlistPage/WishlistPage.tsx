import { trans } from "@mongez/localization";
import { wishlistAtom } from "design-system/atoms/wishlist-atom";
import Breadcrumbs from "design-system/components/Breadcrumbs";
import { Skeleton } from "design-system/components/ui/skeleton";
import React, { useEffect, useState } from "react";
import WishlistProductsContainer from "./components/WishlistProductsContainer";

function _WishlistPage() {
  const wishlist = wishlistAtom.useValue();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [wishlist]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-1 w-full max-w-[1440px] mx-auto py-6 px-4">
        <Skeleton className="w-full h-10" />
        <div className="flex items-start justify-center md:justify-start flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              className="max-h-[400px] md:h-[415px] lg:h-[400px] max-w-[190px] md:min-w-[230px]"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-lightGray w-full h-full">
      <div className="w-full max-w-[1440px] mx-auto py-6 px-4 flex flex-col items-start gap-5">
        <Breadcrumbs title="wishlist" />
        {wishlist.products && wishlist?.products?.length > 0 ? (
          <WishlistProductsContainer products={wishlist?.products} />
        ) : (
          <div className="flex w-full gap-4 items-center justify-center">
            <h1 className="text-md italic text-center text-gray">
              {trans("emptyWishlist")}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

const WishlistPage = React.memo(_WishlistPage);
export default WishlistPage;
