import { trans } from "@mongez/localization";
import { useProductActions } from "app/products/hooks/useProductActions";
import { Button } from "design-system/components/ui/button";
import { Input } from "design-system/components/ui/input";
import { Product } from "design-system/utils/types";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface HandleProductQuantityProps {
  product: Product;
}

export default function HandleProductQuantity({
  product,
}: HandleProductQuantityProps) {
  const {
    handleAddToCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleQuantityChange,
    quantity,
  } = useProductActions(product);

  return (
    <>
      {product.inStock && (
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-5 my-3">
          <div className="col-span-1 border-[1px] border-slate-200 rounded-full flex items-center py-2 px-5 justify-between">
            <FaMinus
              className="w-4 h-4 mr-1 cursor-pointer text-primary "
              onClick={handleDecreaseQuantity}
            />
            <Input
              type="number"
              value={quantity < 10 ? `0${quantity}` : `${quantity}`}
              className="border-0 focus:ring-0 focus-visible:ring-0 ring-0 ring-offset-0 w-10 h-5 py-0 px-1 
               text-primary font-semibold"
              onChange={handleQuantityChange}
            />
            <FaPlus
              className="w-4 h-4 ml-1 cursor-pointer text-primary "
              onClick={handleIncreaseQuantity}
            />
          </div>
          <div className="col-span-1 md:col-span-3 w-full">
            <Button
              variant={"primary"}
              className="rounded-full h-12 w-full uppercase"
              onClick={handleAddToCart}>
              {trans("Add To Cart")}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
