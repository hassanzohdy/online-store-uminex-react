import ProductsContainer from "design-system/components/Products/ProductsContainer";
import React from "react";

function _SearchPage() {
  return <ProductsContainer title="Search Page" additionalTitle={true} />;
}

const SearchPage = React.memo(_SearchPage);
export default SearchPage;
