import { useState } from "react";

import { wishlistAtom } from "../../design-system/atoms/wishlist-atom";

export const useDeleteWishlistItem = (wishlistItemId: number) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const deleteItem = async () => {
    setIsDeleting(true);
    await wishlistAtom.deleteItem(wishlistItemId);
    setIsDeleting(false);
  };

  return {
    isDeleting,
    deleteItem,
  };
};
