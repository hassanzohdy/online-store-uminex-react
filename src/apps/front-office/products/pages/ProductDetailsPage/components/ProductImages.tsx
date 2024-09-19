import { cn } from "design-system/lib/utils";
import { Product } from "design-system/utils/types";

interface ProductImagesProps {
  cartProduct: {
    product: Product;
    selectedImage: string;
  };
  setCurrentImage: (imageUrl: string) => void;
}
export default function ProductImages({
  cartProduct,
  setCurrentImage,
}: ProductImagesProps) {
  return (
    <div className="grid grd-cols-1 md:grid-cols-5 gap-6 ">
      <div className="col-span-1 flex flex-row md:flex-col items-center justify-start gap-2 w-full">
        {cartProduct.product.images.map(image => (
          <img
            key={image.id}
            src={image.url}
            alt=""
            className={cn(
              "w-16 h-16 border rounded-md p-1 cursor-pointer",
              cartProduct.selectedImage === image.url
                ? "border-blue"
                : "border-slate-200",
            )}
            onClick={() => setCurrentImage(image.url)}
          />
        ))}
      </div>
      <div className="md:col-span-4 max-w-[500px] h-[500px]">
        <img src={cartProduct.selectedImage} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}
