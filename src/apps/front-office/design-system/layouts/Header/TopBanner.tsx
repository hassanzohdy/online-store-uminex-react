import { trans } from "@mongez/localization";
import { AiFillThunderbolt } from "react-icons/ai";

const TopBanner = () => {
  return (
    <div className="w-full bg-[#2b38d1] flex items-center justify-between p-3 gap-4 overflow-x-hidden">
      <div className="flex items-center min-w-[350px] truncate">
        <AiFillThunderbolt className="h-5 w-5 mr-2 text-light" />
        <p className="text-light text-sm">{trans("topBannerTitle")}</p>
      </div>
      <div className="flex items-center min-w-[350px] truncate">
        <AiFillThunderbolt className="h-5 w-5 mr-2 text-light" />
        <p className="text-light text-sm">{trans("topBannerTitle")}</p>
      </div>
      <div className="flex items-center min-w-[350px] truncate">
        <AiFillThunderbolt className="h-5 w-5 mr-2 text-light" />
        <p className="text-light text-sm">{trans("topBannerTitle")}</p>
      </div>
      <div className="flex items-center min-w-[350px] truncate">
        <AiFillThunderbolt className="h-5 w-5 mr-2 text-light" />
        <p className="text-light text-sm">{trans("topBannerTitle")}</p>
      </div>
    </div>
  );
};

export default TopBanner;
