import { Skeleton } from "design-system/components/ui/skeleton";

const CheckoutSummaryDetailsLoadingComponent = () => {
  return (
    <div className="flex flex-col items-start w-full gap-5 max-w-[650px] px-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-start gap-2">
          <Skeleton className="w-28 h-16" />
          <div className="flex flex-col gap-2 items-start">
            <Skeleton className="w-48 h-4" />
            <Skeleton className="w-28 h-4" />
          </div>
        </div>
        <Skeleton className="w-20 h-4" />
      </div>
      <div className="flex items-center justify-between w-full">
        <Skeleton className="w-28 h-4" />
        <Skeleton className="w-28 h-4" />
      </div>
      <div className="flex items-center justify-between w-full">
        <Skeleton className="w-28 h-4" />
        <Skeleton className="w-28 h-4" />
      </div>
      <div className="flex items-center justify-between w-full">
        <Skeleton className="w-28 h-4" />
        <Skeleton className="w-28 h-4" />
      </div>
      <div className="flex items-center justify-between w-full">
        <Skeleton className="w-40 h-5" />
        <Skeleton className="w-40 h-5" />
      </div>
    </div>
  );
};

export default CheckoutSummaryDetailsLoadingComponent;
