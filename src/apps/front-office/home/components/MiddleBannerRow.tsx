import { translateText } from "app/products/utils/translate-text";

import { Column } from "design-system/utils/types";

interface MiddleBannerRowProps {
  column: Column[];
}

export default function MiddleBannerRow({ column }: MiddleBannerRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
      {column.map(column => (
        <div
          className="relative group overflow-hidden rounded-md"
          key={column.id}>
          <img
            src={column.module.banner?.image[0].value.url}
            alt=""
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <h1 className="absolute top-[30%] left-3 text-white text-lg md:text-xl font-medium w-[150px]">
            {translateText(column.module.banner?.title || "")}
          </h1>
        </div>
      ))}
    </div>
  );
}
