import { useEffect, useState } from "react";

import CompareModel from "design-system/components/models/compare-model";
import ImagesModel from "design-system/components/models/images-model";
import SearchModel from "design-system/components/models/search-model";
import ShareModel from "design-system/components/models/ShareModel";
import CartSheetSidebar from "layouts/BaseLayout/components/Header/components/cart/cart-sidebar-sheet";
import MobileSidebarSheet from "layouts/BaseLayout/components/Header/components/sheets/mobile-sidebar-sheet";
import WishListSheetSidebar from "layouts/BaseLayout/components/Header/components/wishlist/wishlist-sidebar-sheet";

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
      <ShareModel />
    </>
  );
};

export default ModalProvider;
