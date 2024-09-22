import { trans } from "@mongez/localization";
import { FiLayers } from "react-icons/fi";

import { modalAtom } from "design-system/atoms/model-atom";
import { Button } from "design-system/components/ui/button";
import { useCompare } from "design-system/hooks/useCompare";
import { formatNumber } from "design-system/lib/formats";

export default function CompareModelContainer() {
  const { data, isLoading, error } = useCompare();

  const openSheet = () => {
    modalAtom.onOpen("compare");
  };

  if (isLoading) {
    return (
      <Button variant={"ghost"} className="hover:bg-transparent">
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <FiLayers className="w-4 h-4" />
          </div>
          <h1 className="text-[14px] font-semibold text-primary">
            {trans("compare")} ( 0 )
          </h1>
        </div>
      </Button>
    );
  }

  if (error) {
    return <div className="text-red-500">Error loading compare data.</div>;
  }

  if (data) {
    return (
      <div className="flex items-center gap-1" onClick={openSheet}>
        <div className="flex items-center gap-2">
          <FiLayers className="w-4 h-4" />
        </div>
        <h1 className="text-[14px] font-semibold text-slate-900 ">
          {trans("compare")} ( {formatNumber(data.length)} )
        </h1>
      </div>
    );
  }
}
