import { trans } from "@mongez/localization";
import { FiLayers } from "react-icons/fi";

import { compareAtom } from "design-system/atoms/compare-atom";
import { modalAtom } from "design-system/atoms/model-atom";
import { formatNumber } from "design-system/lib/formats";

export default function CompareModelContainer() {
  const compare = compareAtom.useValue();

  const openSheet = () => {
    modalAtom.onOpen("compare");
  };

  return (
    <div className="flex items-center gap-1" onClick={openSheet}>
      <div className="flex items-center gap-2">
        <FiLayers className="w-4 h-4" />
      </div>
      <h1 className="text-[14px] font-semibold text-slate-900 ">
        {trans("compare")} ( {formatNumber(compare.length)} )
      </h1>
    </div>
  );
}
