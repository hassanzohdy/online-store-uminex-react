import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { formatPrice } from "apps/front-office/design-system/lib/formats";
import { FiX } from "react-icons/fi";

const WishlistItem = ({ wishlistItem }: any) => {
  const currentLanguage = current("localeCode");

  // const DeleteItem = () =>{
  //   setIsLoading(true);
  //   deleteItem(WishlistItem);
  //   setIsLoading(false);
  // }

  return (
    <div className="flex items-start justify-between gap-3 relative w-full p-5">
      <div className="min-w-20 h-20 relative">
        <img
          src={wishlistItem.images[0].url}
          alt={wishlistItem.slug}
          className="w-full h-full"
        />
      </div>
      <div className="flex items-start flex-col gap-1">
        <h1 className="text-black text-sm font-medium">
          {trans(
            wishlistItem.name.find(name => name.localeCode === currentLanguage)
              ?.value || "",
          )}
        </h1>
        <h2 className="text-blue text-sm font-medium">
          {formatPrice(wishlistItem.price)}
        </h2>
      </div>
      <Button className="" variant={"ghost"}>
        <FiX className="w-4 h-4 text-red" />
      </Button>
    </div>
  );
};

export default WishlistItem;
