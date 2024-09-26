import { useEffect, useState } from "react";

import CompareModel from "design-system/components/models/compare-model";
import ImagesModel from "design-system/components/models/images-model";
import SearchModel from "design-system/components/models/search-model";
import CartSheetSidebar from "design-system/layouts/Header/components/cart/cart-sidebar-sheet";
import MobileSidebarSheet from "design-system/layouts/Header/components/sheets/mobile-sidebar-sheet";
import WishListSheetSidebar from "design-system/layouts/Header/components/wishlist/wishlist-sidebar-sheet";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CartSheetSidebar />
      <WishListSheetSidebar />
      <CompareModel />
      <ImagesModel />
      <MobileSidebarSheet />
      <SearchModel />
    </>
  );
};

export default ModalProvider;
