import { trans } from "@mongez/localization";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "design-system/components/ui/dialog";
import { Input } from "design-system/components/ui/input";
import { cn } from "design-system/lib/utils";
import { useSearch } from "../../hooks/useSearch";
import SearchResult from "../../layouts/Header/components/search/search-result";

export default function SearchModel() {
  const { value, categoryId, storeInputValue, OnClose } = useSearch();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative w-full">
          <Input
            placeholder={trans("searchInputModelPlaceHolder")}
            className="rounded-full"
          />
        </div>
      </DialogTrigger>
      <DialogContent
        className="min-h-screen min-w-full flex flex-col gap-5
       items-center justify-start py-20 mt-6">
        <DialogHeader>
          <DialogTitle>{trans("searchModelTitle")}</DialogTitle>
        </DialogHeader>
        <div className="relative w-full">
          <Input
            placeholder={trans("searchInputModelPlaceHolder")}
            className="rounded-md h-10 border-slate-300"
            onChange={storeInputValue}
            type="search"
            value={value}
          />

          <div
            className={cn(
              "absolute top-full left-0 w-full border z-50 ",
              value === "" && "hidden",
            )}>
            <SearchResult
              value={value}
              category={categoryId}
              OnClose={OnClose}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
