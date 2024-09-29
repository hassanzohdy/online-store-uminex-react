import { trans } from "@mongez/localization";
import { modalAtom } from "design-system/atoms/model-atom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "design-system/components/ui/dialog";
import { Input } from "design-system/components/ui/input";
import { cn } from "shared/lib/utils";
import SearchResult from "../../../layouts/BaseLayout/components/Header/components/search/search-result";
import { useSearch } from "../../../shared/hooks/use-search";

export default function SearchModel() {
  const { value, categoryId, storeInputValue, handleKeyDown } = useSearch();
  const data = modalAtom.useValue();

  const isModalOpen = data.isOpen && data.type === "search";
  if (!isModalOpen) {
    return null;
  }

  const handleClose = () => {
    modalAtom.onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent
        className="h-full max-h-[100vh] w-full max-w-[100vw] flex flex-col gap-5
       items-center justify-start">
        <DialogHeader>
          <DialogTitle>{trans("searchModelTitle")}</DialogTitle>
        </DialogHeader>
        <div className="relative w-full">
          <Input
            placeholder={trans("searchInputModelPlaceHolder")}
            className="rounded-md h-10 border-slate-300"
            onChange={storeInputValue}
            type="text"
            value={value}
            onKeyDown={e => {
              handleKeyDown(e, handleClose);
            }}
          />

          <div
            className={cn(
              "absolute top-full left-0 w-full border z-50 ",
              value === "" && "hidden",
            )}>
            <SearchResult
              value={value}
              category={categoryId}
              OnClose={handleClose}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
