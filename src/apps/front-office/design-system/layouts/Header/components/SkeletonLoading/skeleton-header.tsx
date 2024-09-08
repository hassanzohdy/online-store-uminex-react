import { Skeleton } from "design-system/components/ui/skeleton";
const SkeletonHeaderLoading = () => {
  return (
    <div className=" py-6 ">
      <div className="w-full hidden lg:flex items-center justify-between">
        <Skeleton className="h-12 w-28 bg-slate-200" />
        <Skeleton className="h-12 w-[770px] bg-slate-200" />
        <div className="flex items-center gap-6">
          <Skeleton className="h-8 w-12 bg-slate-200" />
          <Skeleton className="h-8 w-12 bg-slate-200" />
          <Skeleton className="h-8 w-12 bg-slate-200" />
        </div>
      </div>
      <Skeleton className="w-full h-12 block lg:hidden" />
    </div>
  );
};

export default SkeletonHeaderLoading;
