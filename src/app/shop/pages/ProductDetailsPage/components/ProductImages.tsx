import { useEffect, useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";
import InnerImageZoom from "react-inner-image-zoom";

import { modalAtom } from "design-system/atoms/model-atom";
import { Button } from "design-system/components/ui/button";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { cn } from "shared/lib/utils";
import { isLTR } from "shared/utils/helpers";
import { Product } from "shared/utils/types";

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
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  const handleOpenModel = () => {
    modalAtom.onOpen("images", cartProduct.product.images);
  };

  return (
    <div className="grid grd-cols-1 md:grid-cols-5 gap-10 relative">
      <div className="col-span-1 flex flex-row md:flex-col items-center justify-start gap-2 w-full">
        {cartProduct.product.images.map(image => (
          <img
            loading="lazy"
            key={image.id}
            src={image.url}
            alt="Product thumbnail"
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
      <div
        className="md:col-span-4 max-w-[500px] h-[500px] "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <InnerImageZoom
          src={cartProduct.selectedImage}
          zoomSrc={cartProduct.selectedImage}
          alt="Selected Product Image"
          zoomType="hover"
          className="w-full h-full"
        />
        {isHovered && (
          <div
            className="cursor-outline"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          />
        )}
        <Button
          variant={"ghost"}
          size={"icon"}
          className={cn(
            "absolute top-0 border border-slate-200 rounded-full",
            isLTR() ? "right-2" : "left-2",
          )}
          onClick={handleOpenModel}>
          <MdOutlineZoomOutMap className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
