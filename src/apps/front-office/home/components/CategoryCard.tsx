import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isLTR } from "app/utils/helpers";
import { Category } from "design-system/utils/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to="#" className="flex items-center justify-center flex-col">
      <div className="bg-lightGray rounded-full w-[100px] h-[100px] flex items-center justify-center m-auto">
        <img
          src={category.image.url}
          alt={
            isLTR()
              ? category.name.find(n => n.localeCode === "en")?.value
              : category.name.find(n => n.localeCode === "ar")?.value
          }
          className="rounded-full transition-offset duration-300 outline outline-transparent outline-1 -outline-offset-8 hover:outline-blue hover:outline-offset-0"
        />
      </div>

      <div className="group mt-3 flex flex-col items-center justify-center">
        <div className="group-hover:text-blue transition duration-300">
          {isLTR()
            ? category.name.find(n => n.localeCode === "en")?.value
            : category.name.find(n => n.localeCode === "ar")?.value}
        </div>
        <div className="text-gray text-[13px]">
          {category.totalProducts} {trans("Products")}
        </div>
      </div>
    </Link>
  );
}
