import { trans } from "@mongez/localization";
import React, { useEffect, useState } from "react";
import { LuLoader2 } from "react-icons/lu";

import Helmet from "@mongez/react-helmet";
import Breadcrumbs from "design-system/components/Breadcrumbs";
import ProductsList from "design-system/components/Products/ProductsList";
import { useFilters } from "shared/hooks/use-filters";
import { useProduct } from "shared/hooks/use-products";
import { Product } from "shared/utils/types";

function _ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const {
    filters,
    params,
    updateCategory,
    updateMinPrice,
    updateMaxPrice,
    updateSortOptions,
    updateInStock,
    resetFiltersExceptQuery,
    updatePageNumber,
  } = useFilters();

  const { data, isLoading, error } = useProduct(params);

  useEffect(() => {
    if (data?.products) {
      const products = [...data.products];

      if (filters.sort === "price_asc") {
        products.sort((a, b) => a.price - b.price);
      } else if (filters.sort === "price_dsc") {
        products.sort((a, b) => b.price - a.price);
      }

      const filtered = filters.category
        ? products.filter(product => product.category.id === filters.category)
        : products;

      setFilteredProducts(filtered);
    }
  }, [data, filters]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center pt-16">
        <LuLoader2 className="w-10 h-10 animate-spin text-blue" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center pt-16">
        <h1 className="text-center text-red text-lg font-semibold">
          {trans("Something went wrong, Try Again Later.")}
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Helmet title="Products Page" />
      <div className="w-full">
        <Breadcrumbs title="products" image />
      </div>
      <div className="w-full h-full bg-lightGray">
        <div className="max-w-[1400px] mx-auto py-10 px-4 flex flex-col items-center justify-center gap-1">
          {data?.paginationInfo && (
            <ProductsList
              products={filteredProducts}
              updateCategory={updateCategory}
              updateInStock={updateInStock}
              updateMaxPrice={updateMaxPrice}
              updateMinPrice={updateMinPrice}
              updateSortOptions={updateSortOptions}
              filters={filters}
              paginationInfo={data.paginationInfo}
              resetFiltersExceptQuery={resetFiltersExceptQuery}
              updatePageNumber={updatePageNumber}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const ProductsPage = React.memo(_ProductsPage);
export default ProductsPage;
