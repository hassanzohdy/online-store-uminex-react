import { Separator } from "design-system/components/ui/separator";
import { Skeleton } from "design-system/components/ui/skeleton";
import { cn } from "shared/lib/utils";
import { isLTR } from "shared/utils/helpers";

export default function CheckoutFormLoadingComponent() {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-full gap-5 max-w-[650px] p-5",
        isLTR() ? "ml-auto" : "mr-auto",
      )}>
      <Skeleton className="w-28 h-6" />
      <div className="flex items-center gap-4">
        <Skeleton className="w-36 h-10" />
        <Skeleton className="w-36 h-10" />
        <Skeleton className="w-36 h-10" />
      </div>
      <Separator className="my-2" />
      <div className="flex items-start flex-col gap-5 w-full">
        <Skeleton className="w-28 h-6" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>
      <Separator className="my-2" />
      <div className="flex items-start flex-col gap-5 w-full">
        <Skeleton className="w-28 h-6" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>
    </div>
  );
}
