import CompareModel from "design-system/components/models/compare-model";
import CartSheetSidebar from "design-system/layouts/Header/components/sheets/cart-sidebar-sheet";
import WishListSheetSidebar from "design-system/layouts/Header/components/sheets/wishlist-sidebar-sheet";
import { useEffect, useState } from "react";

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
    </>
  );
};

export default ModalProvider;
