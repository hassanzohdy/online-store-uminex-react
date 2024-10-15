import ProductsContainer from "design-system/components/Products/ProductsContainer";
import React from "react";

function _ProductsPage() {
  return <ProductsContainer title="Products Page" />;
}

const ProductsPage = React.memo(_ProductsPage);
export default ProductsPage;
