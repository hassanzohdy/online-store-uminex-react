import { trans } from "@mongez/localization";
import { Column } from "shared/utils/types";
import { useTimer } from "../hooks/useTimer";
import { CarouselProducts } from "./CarouselProducts";
import Heading from "./heading";

interface DealsRowProps {
  column: Column[];
}

export default function DealsRow({ column }: DealsRowProps) {
  const { timeLeft } = useTimer();

  return (
    <div className="flex flex-col items-start gap-y-1 w-full">
      <div className="w-full p-3 bg-white flex items-center justify-between flex-wrap gap-y-3">
        <Heading title={column[1]?.module?.title} />
        <div className="flex items-center justify-center gap-2 text-red-600 font-semibold text-xs md:text-sm text-gray">
          <span>{trans("Hurry up! Offer ends in")}:</span>
          <div className="flex gap-2">
            <span className="bg-red text-white py-1 px-2 text-xs md:text-sm">
              {timeLeft.days}
            </span>
            <span className="bg-red text-white py-1 px-2 text-xs md:text-sm">
              {timeLeft.hours}
            </span>
            <span className="bg-red text-white py-1 px-2 text-xs md:text-sm">
              {timeLeft.minutes}
            </span>
            <span className="bg-red text-white py-1 px-2 text-xs md:text-sm">
              {timeLeft.seconds}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-y-2 w-full">
        <img
          loading="lazy"
          src={column[0].module.banner?.image[0].value.url}
          alt=""
          className="w-full md:w-[33%] md:h-[400px] object-cover"
        />
        <div className="w-full md:w-[67%]">
          <CarouselProducts products={column[1].module.products!} />
        </div>
      </div>
    </div>
  );
}
