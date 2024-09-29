import { Link } from "@mongez/react-router";
import { FaChevronRight } from "react-icons/fa";

import { trans } from "@mongez/localization";
import { FaChevronLeft } from "react-icons/fa6";
import { isLTR } from "shared/utils/helpers";
import { Column } from "shared/utils/types";
import URLS from "shared/utils/urls";
import { CarouselProducts } from "./CarouselProducts";
import Heading from "./heading";

interface RecommendedRowProps {
  column: Column[];
}

export default function RecommendedRow({ column }: RecommendedRowProps) {
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
        <CarouselProducts products={column[0].module.products!} />
      </div>
    </div>
  );
}
