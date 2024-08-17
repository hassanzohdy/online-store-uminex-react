import { current } from "@mongez/react";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { formatPrice } from "apps/front-office/design-system/lib/formats";
import { Product } from "apps/front-office/design-system/utils/types";
import { FiTrash2 } from "react-icons/fi";

interface CompareTableHeadProps {
  compareItem: Product;
  deleteItem: (id: number) => void;
}

const CompareTableHead = ({
  compareItem,
  deleteItem,
}: CompareTableHeadProps) => {
  const currentLanguage = current("localeCode");

  const handleDeleteCompareItem = () => {
    deleteItem(compareItem.id);
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
              className="text-base font-medium text-center">
              <span className="text-red">
                {formatPrice(compareItem.salePrice)}
              </span>{" "}
              <span className="line-through text-slate-500 text-base font-medium">
                {formatPrice(compareItem.price)}
              </span>
            </div>
          ) : (
            <span className="text-blue text-base font-medium text-center">
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
};

export default CompareTableHead;
