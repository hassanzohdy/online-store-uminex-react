import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { FaPlus } from "react-icons/fa";

export type CollectionCardProps = {
  // props go here
  image: string;
  title: string;
};
export default function CollectionCard({ image, title }: CollectionCardProps) {
  return (
    <div className="p-5 bg-white rounded-md">
      <Link
        to="/"
        className="group uppercase block cursor-pointer overflow-hidden relative rounded-md ">
        <div className="absolute bg-gray h-full w-full z-10 opacity-0 pointer-events-none group-hover:opacity-55 transition-opacity duration-300"></div>
        <FaPlus
          color="white"
          className="absolute z-30  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
        <img
          className="hover:scale-110 transition-transform duration-1000 ease-linear w-full h-full"
          src={image}
          alt=""
        />
      </Link>

      <div className="text-center">
        <Link className="uppercase cursor-pointer inline-block text-xs hover:text-blue my-3">
          {title}
        </Link>
        <p className="text-gray text-xs">14 {trans(title)}</p>
      </div>
    </div>
  );
}
