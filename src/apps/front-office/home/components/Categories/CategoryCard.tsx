import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import categoryImage from "shared/assets/images/categoryItem.webp";

export default function CategoryCard() {
  return (
    <Link href="#">
      <div className="bg-lightGray rounded-full w-[100px] h-[100px] flex items-center justify-center m-auto">
        <img
          src={categoryImage}
          alt="category-img"
          className="rounded-full transition-offset duration-300 outline outline-transparent outline-1 -outline-offset-8 hover:outline-blue hover:outline-offset-0"
        />
      </div>

      <div className="group mt-3">
        <div className="group-hover:text-blue transition duration-300">
          {trans("Macbook/PCs")}
        </div>
        <div className="text-gray text-[13px]">13 {trans("Products")}</div>
      </div>
    </Link>
  );
}
