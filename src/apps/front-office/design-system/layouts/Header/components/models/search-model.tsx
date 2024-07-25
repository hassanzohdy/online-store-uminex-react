import { Button } from "apps/front-office/design-system/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "apps/front-office/design-system/components/ui/dialog";
import { Input } from "apps/front-office/design-system/components/ui/input";
import { ChangeEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { cn } from "../../../../lib/utils";
import SearchResult from "../search-result";

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
          <Input placeholder="Search" className="rounded-full" />
          <Button
            variant={"ghost"}
            className="rounded-full absolute right-0 top-0"
            size={"icon"}>
            <CiSearch className="w-5 h-5" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent
        className="min-h-screen min-w-full flex flex-col gap-5
       items-center justify-start py-20 mt-6">
        <DialogHeader>
          <DialogTitle>WHAT ARE YOU LOOKING FOR?</DialogTitle>
        </DialogHeader>
        <div className="relative w-full">
          <Input
            placeholder="Search"
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
