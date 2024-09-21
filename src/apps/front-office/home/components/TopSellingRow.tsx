import { Link } from "@mongez/react-router";
import { FaChevronRight } from "react-icons/fa";

import { trans } from "@mongez/localization";
import { isLTR } from "app/utils/helpers";
import URLS from "app/utils/urls";
import { Column } from "design-system/utils/types";
import { FaChevronLeft } from "react-icons/fa6";
import { CarouselProducts } from "./CarouselProducts";
import Heading from "./heading";

interface TopSellingRowProps {
  column: Column[];
}

export default function TopSellingRow({ column }: TopSellingRowProps) {
  return (
    <div className="flex flex-col items-start gap-y-1 w-full">
      <div className="w-full p-3 bg-white flex items-center justify-between">
        <Heading title={column[0]?.module?.title} />
        <Link
          to={URLS.products.root}
          className="flex items-center gap-1 text-xs md:text-sm text-gray">
          {trans("View All Products")}{" "}
          {isLTR() ? (
            <FaChevronRight className="w-3 h-3" />
          ) : (
            <FaChevronLeft className="w-3 h-3" />
          )}
        </Link>
      </div>
      <div className="w-full">
        <CarouselProducts products={column[0].module.products!} oneRow />
      </div>
    </div>
  );
}
