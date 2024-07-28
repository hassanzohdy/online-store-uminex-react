import { trans } from "@mongez/localization";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "apps/front-office/design-system/components/ui/dialog";

const CompareModel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col gap-5 items-center justify-start p-0 min-h-[200px]">
        <DialogHeader className="w-full bg-slate-100 py-3">
          <DialogTitle className="text-slate-800 text-center">
            {trans("compare")}
          </DialogTitle>
        </DialogHeader>
        <div className="w-full text-center h-full mt-auto py-3">
          {trans("emptyCompareList")}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompareModel;
