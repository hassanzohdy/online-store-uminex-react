import { trans } from "@mongez/localization";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "apps/front-office/design-system/components/ui/dialog";
import { Input } from "apps/front-office/design-system/components/ui/input";
import { ChangeEvent, useState } from "react";
import SearchResult from "../../layouts/Header/components/search/search-result";
import { cn } from "../../lib/utils";

const SearchModel = () => {
  const [value, setValue] = useState("");

  const storeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

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
            <SearchResult value={value} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModel;
