import { Link } from "@mongez/react-router";
import { FaChevronRight } from "react-icons/fa";

import URLS from "app/utils/urls";
import { Column } from "design-system/utils/types";
import { CarouselProducts } from "./CarouselProducts";
import Heading from "./heading";

interface SixthRowProps {
  column: Column[];
}

export default function SixthRow({ column }: SixthRowProps) {
  return (
    <div className="flex flex-col items-start gap-y-1 w-full">
      <div className="w-full p-3 bg-white flex items-center justify-between">
        <Heading title={column[0]?.module?.title} />
        <Link
          to={URLS.collections}
          className="flex items-center gap-1 text-sm text-gray">
          View All Products <FaChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="w-full">
        <CarouselProducts products={column[0].module.products!} oneRow />
      </div>
    </div>
  );
}
