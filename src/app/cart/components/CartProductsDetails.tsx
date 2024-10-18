import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { ChangeEvent, useState } from "react";

import { cartAtom } from "design-system/atoms/cart-atom";
import { Button } from "design-system/components/ui/button";
import { Separator } from "design-system/components/ui/separator";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "design-system/components/ui/table";
import { Textarea } from "design-system/components/ui/textarea";
import { cn } from "shared/lib/utils";
import { isLTR } from "shared/utils/helpers";
import URLS from "shared/utils/urls";
import { cartOrderAtom } from "../atoms/cart-order-atom";
import CartProductsDetailsCard from "./CartProductsDetailsCard";

export default function CartProductsDetails() {
  const [value, setValue] = useState("");
  const cart = cartAtom.useValue();

  const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const note = e.target.value;
    setValue(note);
    cartOrderAtom.addOrderNote(note);
  };

  const DeleteAllItems = () => {
    cartAtom.deleteAllItems();
  };

  return (
    <div className="col-span-1 lg:col-span-3">
      <Table>
        <TableHeader className="">
          <TableRow className="border-slate-200 border-t">
            <TableHead
              className={cn(
                "min-w-[400px] md:w-[500px] text-primary uppercase font-bold text-sm py-5",
                isLTR() ? "text-left" : "text-right",
              )}>
              {trans("Product")}
            </TableHead>
            <TableHead
              className={cn(
                "w-[200px] text-primary uppercase font-bold text-sm",
                isLTR() ? "text-left" : "text-right",
              )}>
              {trans("Quantity")}
            </TableHead>
            <TableHead
              className={cn(
                "text-primary uppercase font-bold text-sm",
                isLTR() ? "text-left" : "text-right",
              )}>
              {trans("subtotal")}
            </TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.items &&
            cart.items.map(item => (
              <TableRow className="border-slate-200" key={item.id}>
                <CartProductsDetailsCard item={item} />
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between w-full flex-wrap my-5 py-5 border-b border-t border-slate-200">
        <Button variant={"primary"} size={"lg"} className="rounded-full h-12">
          <Link href={URLS.shop.products}>{trans("Continue Shopping")}</Link>
        </Button>
        <Button
          variant={"primary"}
          size={"lg"}
          className="rounded-full h-12"
          onClick={DeleteAllItems}>
          {trans("Delete All")}
        </Button>
      </div>
      <div className="w-full my-5 flex flex-col items-start gap-3">
        <h1 className="text-md text-primary font-bold uppercase">
          {trans("Add Order Notes")}
        </h1>
        <Separator className="w-[60px] h-[2.5px]" />
        <Textarea
          onChange={handleNoteChange}
          placeholder={trans("How Can We Help You!")}
          className="w-full h-[150px] bg-lightGray rounded-[30px] p-4 
          focus:bg-transparent border-0 ring-0 focus:ring-0 focus-visible:ring-0 ring-offset-0 inset-y-0"
          value={value}
        />
      </div>
    </div>
  );
}
