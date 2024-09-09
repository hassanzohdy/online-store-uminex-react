import { trans } from "@mongez/localization";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "design-system/components/ui/table";
import { User } from "design-system/utils/types";

interface AccountDetailsProps {
  user: User;
}

export default function AccountDetails({ user }: AccountDetailsProps) {
  return (
    <Table className="border-[.5px] border-slate-300">
      <TableBody>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("firstName")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.firstName}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("LastName")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.lastName}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("email")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.email}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("phoneNumber")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.phoneNumber}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("Gender")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.gender}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("status")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.isActive ? "Active" : "Inactive"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("Total Cart Products")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.totalCart}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="table-cell text-sm font-normal text-slate-900 min-w-[200px] md:w-[300px]">
            {trans("Total Wishlist Products")}
          </TableCell>
          <TableCell className="table-cell py-3 text-slate-600">
            {user.totalWishlist}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
