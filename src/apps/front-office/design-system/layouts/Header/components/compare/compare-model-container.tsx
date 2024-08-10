import { trans } from "@mongez/localization";
import { compareAtom } from "apps/front-office/design-system/atoms/compare-atom";
import CompareModel from "apps/front-office/design-system/components/models/compare-model";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { useCompare } from "apps/front-office/design-system/hooks/use-compare";
import { formatNumber } from "apps/front-office/design-system/lib/formats";
import { useState } from "react";
import { FiLayers } from "react-icons/fi";

const CompareModelContainer = () => {
  const { data, isLoading, error } = useCompare();
  const [_, setTicks] = useState(false);

  const updateData = () => {
    setTicks(prev => !prev);
  };

  if (isLoading) {
    return (
      <Button variant={"ghost"} className="hover:bg-transparent">
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <FiLayers className="w-4 h-4" />
          </div>
          <h1 className="text-[14px] font-medium text-slate-900 ">
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
    compareAtom.update(data);
    const { products } = data;
    return (
      <CompareModel updateData={updateData}>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <FiLayers className="w-4 h-4" />
          </div>
          <h1 className="text-[14px] font-medium text-slate-900 ">
            {trans("compare")} ( {formatNumber(products.length)} )
          </h1>
        </div>
      </CompareModel>
    );
  }
};

export default CompareModelContainer;
