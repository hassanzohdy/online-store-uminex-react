import { trans } from "@mongez/localization";
import { preload, setPreloadConfiguration } from "@mongez/react-utils";
import { LuLoader2 } from "react-icons/lu";

import FifthRow from "app/home/components/FifthRow";
import FirstRow from "app/home/components/FirstRow";
import FourthRow from "app/home/components/FourthRow";
import SecondRow from "app/home/components/SecondRow";
import SixthRow from "app/home/components/SixthRow";
import ThirdRow from "app/home/components/ThirdRow";
import { getHome } from "app/home/services/home-service";
import { Row } from "design-system/utils/types";

interface HomePageProps {
  data: {
    rows: Row[];
  };
}

setPreloadConfiguration({
  loadingErrorComponent: ({isLoading, error}) => {
    if(isLoading){
      return (
        <div className="w-full min-h-full flex items-center justify-center pt-16">
          <LuLoader2 className="w-10 h-10 animate-spin text-blue" />
        </div>
      )
    }
    else if(error){
      return (
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-center text-red text-lg font-semibold">
            {trans("Something went wrong, Try Again Later.")}
          </h1>
        </div>
      )
    }
  }
});

function _HomePage({ data }: HomePageProps) {
  const rows = data.rows;
  const row1 = rows[0];
  const row2 = rows[1];
  const row3 = rows[2];
  const row4 = rows[3];
  const row5 = rows[4];
  const row6 = rows[5];

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-start gap-5 w-full max-w-[1400px] mx-auto py-6 px-4 ">
        <FirstRow column={row1.columns} />
        <SecondRow column={row2.columns} />
      </div>
      <div className="my-5 bg-slate-100 w-full py-10">
        <div className="flex flex-col items-start gap-14 max-w-[1400px] mx-auto py-6 px-4">
          <ThirdRow column={row3.columns} />
          <FourthRow column={row4.columns} />
          <FifthRow column={row5.columns} />
          <SixthRow column={row6.columns} />
        </div>
      </div>
    </div>
  );
}

const HomePage = preload(_HomePage, getHome);

export default HomePage;
