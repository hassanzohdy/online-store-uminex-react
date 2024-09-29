import { trans } from "@mongez/localization";
import { Link, queryString } from "@mongez/react-router";
import { translateText } from "shared/utils/translate-text";

import { Category } from "shared/utils/types";
import URLS from "shared/utils/urls";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const query = queryString.toQueryString({ category: category.id });

  return (
    <Link
      to={`${URLS.products.root}?${query}`}
      className="flex items-center justify-center flex-col">
      <div className="bg-lightGray rounded-full w-[100px] h-[100px] flex items-center justify-center m-auto">
        <img
          loading="lazy"
          src={category.image.url}
          alt={translateText(category.name)}
          className="rounded-full transition-offset duration-300 outline outline-transparent outline-1 -outline-offset-8 hover:outline-blue hover:outline-offset-0"
        />
      </div>

      <div className="group mt-3 flex flex-col items-center justify-center">
        <div className="group-hover:text-blue transition duration-300">
          {translateText(category.name)}
        </div>
        <div className="text-gray text-[13px]">
          {category.totalProducts} {trans("Products")}
        </div>
      </div>
    </Link>
  );
}
