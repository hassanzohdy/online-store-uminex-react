import { Link } from "@mongez/react-router";
import { TfiPlus } from "react-icons/tfi";
import { translateText } from "shared/utils/translate-text";
import { Category } from "shared/utils/types";
import URLS from "shared/utils/urls";

export type CollectionCardProps = {
  category: Category;
};

export default function CollectionCard({ category }: CollectionCardProps) {
  const imageUrl = category?.image?.url;

  return (
    <Link
      to={`${URLS.shop.products}?category=${category.id}&page=1`}
      className="group bg-white flex flex-col items-center p-5 rounded-md relative ">
      <div className="relative overflow-hidden">
        <img
          loading="lazy"
          src={imageUrl}
          alt={translateText(category.name)}
          className="w-full min-h-[300px] transition-transform duration-300 ease-linear group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

        <TfiPlus
          size={24}
          className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      <div className="text-center mt-3">
        <h3 className="text-sm font-medium">{translateText(category.name)}</h3>
      </div>
    </Link>
  );
}
