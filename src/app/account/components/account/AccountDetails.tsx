import { trans } from "@mongez/localization";
import user from "app/account/user";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "design-system/components/ui/table";

export default function AccountDetails() {
  return (
    <Table className="border-[.5px] border-slate-300">
      <TableBody>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("firstName")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.name}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("LastName")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.name}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("email")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.get("email")}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("phoneNumber")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.get("phoneNumber")}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("Gender")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.get("gender")}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("Total Cart Products")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.get("totalCart")}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("Total Wishlist Products")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.get("totalWishlist")}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
