import { trans } from "@mongez/localization";
import { preload, setPreloadConfiguration } from "@mongez/react-utils";
import { LuLoader2 } from "react-icons/lu";

import Helmet from "@mongez/react-helmet";
import CategoriesRow from "app/home/components/CategoriesRow";
import DealsRow from "app/home/components/DealsRow";
import MiddleBannerRow from "app/home/components/MiddleBannerRow";
import RecommendedRow from "app/home/components/RecommendedRow";
import SliderRow from "app/home/components/SliderRow";
import TopSellingRow from "app/home/components/TopSellingRow";
import { getHome } from "app/home/services/home-service";
import { Row } from "shared/utils/types";

interface HomePageProps {
  data: {
    rows: Row[];
  };
}

setPreloadConfiguration({
  loadingErrorComponent: ({ isLoading, error }) => {
    if (isLoading) {
      return (
        <div className="w-full min-h-full flex items-center justify-center pt-16">
          <LuLoader2 className="w-10 h-10 animate-spin text-blue" />
        </div>
      );
    } else if (error) {
      return (
        <div className="w-full h-full flex items-center justify-center pt-16">
          <h1 className="text-center text-red text-lg font-semibold">
            {trans("Something went wrong, Try Again Later.")}
          </h1>
        </div>
      );
    }
  },
});

function _HomePage({ data }: HomePageProps) {
  const rows = data.rows;

  const sliderRow = rows[0];
  const categoriesRow = rows[1];
  const dealsRow = rows[2];
  const topSellingRow = rows[3];
  const middleBannerRow = rows[4];
  const recommendedRow = rows[5];

  return (
    <div className="overflow-hidden">
      <Helmet title="Home Page" />
      <div className="flex flex-col items-start gap-5 w-full max-w-[1400px] mx-auto py-6 px-4 ">
        <SliderRow column={sliderRow.columns} />
        <CategoriesRow column={categoriesRow.columns} />
      </div>
      <div className="my-5 bg-lightGray w-full py-10">
        <div className="flex flex-col items-start gap-14 max-w-[1400px] mx-auto py-6 px-4">
          <DealsRow column={dealsRow.columns} />
          <TopSellingRow column={topSellingRow.columns} />
          <MiddleBannerRow column={middleBannerRow.columns} />
          <RecommendedRow column={recommendedRow.columns} />
        </div>
      </div>
    </div>
  );
}

const HomePage = preload(_HomePage, getHome);

export default HomePage;
