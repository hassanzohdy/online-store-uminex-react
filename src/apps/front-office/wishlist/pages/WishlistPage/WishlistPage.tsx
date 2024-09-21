import React from "react";

import Breadcrumbs from "design-system/components/Breadcrumbs";
import { Skeleton } from "design-system/components/ui/skeleton";
import { useWishlist } from "design-system/hooks/useWishlist";
import WishlistProductsContainer from "./components/WishlistProductsContainer";

function _WishlistPage() {
  const { data: wishlist, isLoading, error } = useWishlist();

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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (wishlist) {
    return (
      <div className="bg-lightGray w-full h-full">
        <div className="w-full max-w-[1440px] mx-auto py-6 px-4 flex flex-col items-start gap-5">
          <Breadcrumbs title="wishlist" />
          <WishlistProductsContainer products={wishlist?.products} />
        </div>
      </div>
    );
  }
}

const WishlistPage = React.memo(_WishlistPage);
export default WishlistPage;
