import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "apps/front-office/design-system/components/ui/sheet";
import EmptyWishList from "shared/assets/images/empty-wishlist.svg";
const WishListSheetSidebar = ({ children }: { children: React.ReactNode }) => {
  const wishItems = [];
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="p-0">
        <SheetHeader className="bg-slate-100 p-3">
          <SheetTitle className="text-slate-900 font-semibold text-md">
            My WishList
          </SheetTitle>
        </SheetHeader>
        {wishItems.length > 0 ? (
          <div>WishList items ({wishItems.length})</div>
        ) : (
          <div className="flex items-center justify-center flex-col gap-5 py-5">
            <img src={EmptyWishList} alt="empty cart" />
            <p className="text-sm font-medium text-slate-800 ">
              Your WishList is Empty
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default WishListSheetSidebar;
