import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "apps/front-office/design-system/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "apps/front-office/design-system/components/ui/table";
import { compareAtom } from "../../atoms/compare-atom";
import { formatPrice } from "../../lib/formats";
import { Button } from "../ui/button";
import { FiTrash2 } from "react-icons/fi";
import { Product } from "../../utils/types";

interface CompareModelProps {
  children: React.ReactNode;
  updateData: () => void;
}

const CompareModel = ({ children , updateData }: CompareModelProps) => {
  const compareProducts = compareAtom.useValue();
  const { products } = compareProducts;
  const currentLanguage = current("localeCode");

  const deleteItem = (id:number) =>{
    compareAtom.deleteItem(id);
    updateData()
  }


  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col gap-5 items-center justify-start p-0 min-h-[200px] max-w-full md:max-w-[750px]">
        <DialogHeader className="w-full bg-slate-100 py-3">
          <DialogTitle className="text-slate-800 text-center">
            {trans("compare")}
          </DialogTitle>
        </DialogHeader>
        {products.length > 0 ? (
          <Table className="border-[.5px] border-slate-300 m-5">
            <TableHeader>
              <TableRow>
                <TableHead className="border-r-[.5px] border-slate-300 text-base font-normal text-gray-900">
                  {trans("Products")}
                </TableHead>
                {products.map((product: Product) => (
                  <TableHead
                    key={product.id}
                    className="min-w-[260px] py-4 relative">
                    <div className="relative max-h-[230px] max-w-[200px] mx-auto">
                      <img
                        src={product.images[0].url}
                        className="w-full h-full"
                        alt={product.name.find(
                          n => n.localeCode === currentLanguage,
                        )?.value}
                      />
                    </div>
                    <div className="mt-2 mx-auto">
                      <h1 className="text-black text-base text-center line-clamp-2">
                        {product.name.find(n => n.localeCode === currentLanguage)?.value}
                      </h1>
                      <h1 className="text-center">
                        {product.salePrice ? (
                          <div
                            key={product.id}
                            className="text-base font-medium text-center">
                            <span className="text-red">
                              {formatPrice(product.salePrice)}
                            </span>{" "}
                            <span className="line-through text-slate-500 text-base font-medium">
                              {formatPrice(product.price)}
                            </span>
                          </div>
                        ) : (
                          <span className="text-blue text-base font-medium text-center">
                            {formatPrice(product.price)}
                          </span>
                        )}
                      </h1>
                    </div>
                    <Button className="absolute top-0 right-0 rounded-full" variant={"destructive"} onClick={()=>deleteItem(product.id)}>
                      <FiTrash2 className="w-4 h-4"/>
                    </Button>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border-r-[.5px] border-t-[.5px] border-slate-300 text px-4 text-base font-normal text-gray-900">
                  {trans("Description")}
                </TableCell>
                {products.map((product: Product) => (
                  <TableCell
                    key={product.id}
                    className="border-r-[.5px] border-t-[.5px] border-slate-300 text px-4 text-center text-slate-600">
                    {product.shortDescription.find(
                      n => n.localeCode === currentLanguage,
                    )?.value}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="border-r-[.5px] border-t-[.5px] border-slate-300 text px-4 text-base font-normal text-gray-900">
                  {trans("Category")}
                </TableCell>
                {products.map((product: Product) => (
                  <TableCell
                    key={product.id}
                    className="border-r-[.5px] border-t-[.5px] border-slate-300 text px-4 text-center text-slate-600">
                    {product.category.name.find(
                      n => n.localeCode === currentLanguage,
                    )?.value}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="border-r-[.5px] border-t-[.5px] border-slate-300 text px-4 text-base font-normal text-gray-900">
                  {trans("Availability")}
                </TableCell>
                {products.map((product: Product) => (
                  <TableCell
                    key={product.id}
                    className="border-r-[.5px] border-t-[.5px] border-slate-300 text-center px-4 text-slate-600">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="border-r-[.5px] border-t-[.5px] border-slate-300 text px-4 text-base font-normal text-gray-900">
                  {trans("Type")}
                </TableCell>
                {products.map((product: Product) => (
                  <TableCell
                    key={product.id}
                    className="border-r-[.5px] border-t-[.5px] border-slate-300 text-center px-4 text-slate-600">
                    {product.type}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="border-r-[.5px] border-t-[.5px] border-slate-300 text px-4 text-base font-normal text-gray-900">
                  {trans("Discount")}
                </TableCell>
                {products.map((product: Product) => (
                  <TableCell
                    key={product.id}
                    className="border-r-[.5px] border-t-[.5px] border-slate-300 text-center px-4 text-slate-600">
                    {product.discount
                      ? `${product.discount.percentage}% off`
                      : trans("No Discount")}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <div className="w-full text h-full mt-auto py-3 text-center">
            {trans("emptyCompareList")}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CompareModel;
