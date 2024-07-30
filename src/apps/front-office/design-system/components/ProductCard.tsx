import { trans } from "@mongez/localization";
import { CheckIcon, Cross1Icon, StarFilledIcon } from "@radix-ui/react-icons";
// w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6 flex-shrink-0
type TProduct = {
  discount: boolean;
  stock?: boolean;
};
export default function ProductCard({ discount, stock }: TProduct) {
  return (
    <div className="group  bg-white   p-4 rounded h-[350px] cursor-pointer overflow-hidden">
      <div className="relative mx-auto w-full flex justify-center">
        <img
          className="absolute size-48"
          src="https://demo-uminex.myshopify.com/cdn/shop/products/products_19_1.jpg?v=1672303733&width=533"
          alt=""
        />
      </div>
      <div className="bg-white  translate-y-44 group-hover:translate-y-28 transition-all duration-500 py-1 text-left">
        <h4 className="line-clamp-2 h-10 mt-5 leading-5 font-semibold text-sm ">
          MackBook Air m1 20208GB 256GB/7-core GPU fdfdafdfsadassad
        </h4>
        <div className="flex items-center gap-1">
          <span className="flex">
            <StarFilledIcon className="text-yellow size-4" />
            <StarFilledIcon className="text-yellow size-4" />
            <StarFilledIcon className="text-yellow size-4" />
            <StarFilledIcon className="text-yellow size-4" />
            <StarFilledIcon className="text-yellow size-4" />
          </span>
          <p className="text-sm text-gray">1 review</p>
        </div>
        {discount ? (
          <div className="flex gap-2 items-end">
            <span className="text-secondary font-semibold text-lg">
              $830.00
            </span>
            <span className="text-darkGray line-through text-sm ">$930.00</span>
          </div>
        ) : (
          <span className="text-lg text-blue font-semibold">$48.00</span>
        )}

        <div className="flex items-center gap-2 mt-2">
          {stock ? (
            <>
              <CheckIcon className="text-green size-5" />
              <p className="text-green text-sm">{trans("in stock")}</p>
            </>
          ) : (
            <>
              <Cross1Icon className="text-red size-3" />
              <p className="text-red text-sm">{trans("out stock")}</p>
            </>
          )}
        </div>
        <button
          className={`w-full h-10 rounded-full ${stock ? "bg-blue" : "bg-red"} font-semibold text-white text-sm mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500`}>
          {stock ? "Add To Cart" : "Out Of Stock"}
        </button>
      </div>
    </div>
  );
}
