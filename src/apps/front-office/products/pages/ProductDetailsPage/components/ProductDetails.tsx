import { Product } from "design-system/utils/types";
import { useEffect, useRef, useState } from "react";
import DisplayProductData from "./DisplayProductData";
import ProductImages from "./ProductImages";
import StickyAddToCart from "./StickyAddToCart";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [cartProduct, setCartProduct] = useState({
    product,
    selectedImage: product.images[0].url,
  });

  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const displayProductDataRef = useRef<HTMLDivElement>(null);

  const setCurrentImage = (imageUrl: string) => {
    setCartProduct(prevState => ({ ...prevState, selectedImage: imageUrl }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        setIsStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
  
    const currentRef = displayProductDataRef.current; 
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); 
      }
    };
  }, []);
  

  return (
    <div className="w-full max-w-[1400px] mx-auto py-5 px-4 bg-white relative">
      <div className="lg:sticky top-10 w-full lg:w-1/2 block lg:inline-block my-5">
        <ProductImages
          setCurrentImage={setCurrentImage}
          cartProduct={cartProduct}
        />
      </div>
      <div
        ref={displayProductDataRef}
        className="w-full lg:w-1/2 block lg:inline-block">
        <DisplayProductData product={product} />
      </div>

      {isStickyVisible && <StickyAddToCart product={product} />}
    </div>
  );
}
