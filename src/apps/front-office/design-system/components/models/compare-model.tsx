import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { useState } from "react";

import { modalAtom } from "design-system/atoms/model-atom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "design-system/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "design-system/components/ui/table";
import { compareAtom } from "../../atoms/compare-atom";
import CompareTableHead from "../../layouts/Header/components/compare/compare-table-head";
import { Product } from "../../utils/types";

export default function CompareModel() {
  const data = modalAtom.useValue();
  const [_, setTicks] = useState(0);
  const compareProducts = compareAtom.useValue();

  const currentLanguage = current("localeCode");

  const updateState = () => {
    setTicks(prevTicks => prevTicks + 1);
  };

  const isModalOpen = data.isOpen && data.type === "compare";
  if (!isModalOpen) {
    return null;
  }

  const handleClose = () => {
    modalAtom.onClose();
  };

  return (
    <Dialog open={data.isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="flex flex-col gap-5 items-center justify-start p-0
       max-h-[650px] max-w-full md:w-[750px]">
        <DialogHeader className="w-full bg-slate-100 py-3">
          <DialogTitle className="text-black text-center">
            {trans("compare")}
          </DialogTitle>
        </DialogHeader>
        {compareProducts.length > 0 ? (
          <Table className="border-[.5px] border-slate-300 m-5 scrollbar">
            <TableHeader>
              <TableRow>
                <TableHead
                  className="border-r-[.5px] border-slate-300 text-base
                 font-normal text-primary">
                  {trans("Products")}
                </TableHead>
                {compareProducts.map((product: Product) => (
                  <TableHead key={product.id} className="py-4 relative">
                    <CompareTableHead
                      compareItem={product}
                      updateState={updateState}
                    />
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell
                  className="table-cell
                 text-base font-normal text-primary">
                  {trans("Description")}
                </TableCell>
                {compareProducts.map((product: Product) => (
                  <TableCell
                    key={product.id}
                    className="table-cell
                     text-center py-8 text-gray ">
                    {product.shortDescription.length > 0
                      ? product.shortDescription.find(
                          n => n.localeCode === currentLanguage,
                        )?.value
                      : "no Description"}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell
                  className="table-cell
                 text-base font-normal text-primary">
                  {trans("Category")}
                </TableCell>
                {compareProducts.map((product: Product) => (
                  <TableCell
                    key={product.id}
                    className="table-cell
                     text-center py-8 text-gray">
                    {
                      product.category.name.find(
                        n => n.localeCode === currentLanguage,
                      )?.value
                    }
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell
                  className="table-cell
                 text-base font-normal text-primary">
                  {trans("Availability")}
                </TableCell>
                {compareProducts.map((product: Product) => (
                  <TableCell
                    key={product.id}
                    className="table-cell 
                    text-center 
                     py-8 text-gray">
                    {product.inStock ? (
                      <span className="text-emerald-600">
                        {trans("In Stock")}
                      </span>
                    ) : (
                      <span className="text-red">{trans("Out Of Stock")}</span>
                    )}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell
                  className="table-cell
                  text-base font-normal text-primary">
                  {trans("Type")}
                </TableCell>
                {compareProducts.map((product: Product) => (
                  <TableCell
                    key={product.id}
                    className="table-cell 
                    text-center py-8 text-gray">
                    {product.type}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell
                  className="table-cell
                  text-base font-normal text-primary">
                  {trans("Discount")}
                </TableCell>
                {compareProducts.map((product: Product) => (
                  <TableCell
                    key={product.id}
                    className="table-cell 
                    text-center py-8 text-gray">
                    {product.discount
                      ? `${product.discount.percentage}% off`
                      : trans("No Discount")}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <div className="w-full h-full mt-auto py-3 text-center">
            {trans("emptyCompareList")}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
