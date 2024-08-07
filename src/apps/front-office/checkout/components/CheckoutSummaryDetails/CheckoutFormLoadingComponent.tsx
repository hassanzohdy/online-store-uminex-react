import { current } from "@mongez/react";
import { Separator } from "apps/front-office/design-system/components/ui/separator";
import { Skeleton } from "apps/front-office/design-system/components/ui/skeleton";
import { cn } from "apps/front-office/design-system/lib/utils";

const CheckoutFormLoadingComponent = () => {
  const currentLanguage = current("localeCode");

  return (
    <div
      className={cn(
        "flex flex-col items-center w-full gap-5 max-w-[650px] p-5",
        currentLanguage === "en" ? "ml-auto" : "mr-auto",
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
};

export default CheckoutFormLoadingComponent;
