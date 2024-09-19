import { useState } from "react";

import { Product } from "design-system/utils/types";
import DisplayProductData from "./DisplayProductData";
import ProductImages from "./ProductImages";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [cartProduct, setCartProduct] = useState({
    product,
    selectedImage: product.images[0].url,
  });

  const setCurrentImage = (imageUrl: string) => {
    setCartProduct(prevState => ({ ...prevState, selectedImage: imageUrl }));
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto py-5 px-4 bg-white relative">
      <div className="lg:sticky top-10 w-full lg:w-1/2 block lg:inline-block my-5">
        <ProductImages
          setCurrentImage={setCurrentImage}
          cartProduct={cartProduct}
        />
      </div>
      <div className="w-full lg:w-1/2 block lg:inline-block">
        <DisplayProductData product={product} />
      </div>
    </div>
  );
}
