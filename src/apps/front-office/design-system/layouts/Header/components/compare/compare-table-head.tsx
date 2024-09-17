import { current } from "@mongez/react";
import { compareAtom } from "design-system/atoms/compare-atom";
import { Button } from "design-system/components/ui/button";
import { formatPrice } from "design-system/lib/formats";
import { Product } from "design-system/utils/types";
import { FiTrash2 } from "react-icons/fi";

interface CompareTableHeadProps {
  compareItem: Product;
  updateState: () => void;
}

export default function CompareTableHead({
  compareItem,
  updateState,
}: CompareTableHeadProps) {
  const currentLanguage = current("localeCode");

  const handleDeleteCompareItem = () => {
    compareAtom.deleteItem(compareItem.id);
    updateState();
  };

  return (
    <>
      <div className="relative max-h-[230px] max-w-[200px] mx-auto">
        <img
          src={compareItem.images[0].url}
          className="w-full h-full"
          alt={
            compareItem.name.find(n => n.localeCode === currentLanguage)?.value
          }
        />
      </div>
      <div className="mt-2 mx-auto">
        <h1 className="text-black text-base text-center line-clamp-2">
          {compareItem.name.find(n => n.localeCode === currentLanguage)?.value}
        </h1>
        <h1 className="text-center">
          {compareItem.salePrice ? (
            <div
              key={compareItem.id}
              className="text-base font-semibold text-center">
              <span className="text-red">
                {formatPrice(compareItem.salePrice)}
              </span>{" "}
              <span className="line-through text-slate-500 text-base font-semibold">
                {formatPrice(compareItem.price)}
              </span>
            </div>
          ) : (
            <span className="text-blue text-base font-semibold text-center">
              {formatPrice(compareItem.price)}
            </span>
          )}
        </h1>
      </div>
      <Button
        className="absolute top-5 right-5 rounded-full"
        variant={"destructive"}
        onClick={handleDeleteCompareItem}>
        <FiTrash2 className="w-4 h-4" />
      </Button>
    </>
  );
}
