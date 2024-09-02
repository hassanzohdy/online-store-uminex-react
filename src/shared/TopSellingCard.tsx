import React, { useState } from "react";
import { CheckIcon, EyeOpenIcon, StackIcon } from "@radix-ui/react-icons";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";

import { formatPrice } from "apps/front-office/design-system/lib/formats";

interface TopSellingCardProps {
  to: string;
  name: string;
  sale: string;
  reviews: number;
  rating: number;
  price: number;
  inStock: boolean;
  frontImage: string;
  backImage: string;
}

const TopSellingCard: React.FC<TopSellingCardProps> = ({
  to = "/",
  name = "Samsung Galaxy s20 FE 8GB/256GB Blue",
  sale = "",
  reviews = 10000000,
  rating = 3.5,
  price = 599,
  inStock = true,
  frontImage = "../../public/product1.1.png",
  backImage = "../../public/product1.2.png",
}) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
  const [heartHover, setHeartHover] = useState<boolean>(false);
  const [stackHover, setStackHover] = useState<boolean>(false);
  const [eyeHover, setEyeHover] = useState<boolean>(false);
  const formatNumber = (num: number) => {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    } else {
      return num.toString();
    }
  };

  return (
    <>
      <div
        className="group grid grid-cols-12 bg-[#f1f1f1] gap-3 product-card  justify-start items-center p-6"
        style={{ fontFamily: " Bai Jamjuree, sans-serif" }}>
        <a
          href="#"
          className="relative col-span-5 h-full w-full md:col-span-6 content-center transition-all duration-300 ease-in-out">
          {sale !== "" && (
            <span className="absolute bg-red px-3 py-1 text-sm text-white -left-3 -top-3 ">
              {sale}
            </span>
          )}
          <img
            src={frontImage}
            className="w-full h-full hover:opacity-0 hover:scale-110 transition-all duration-300 ease-in-out"
            alt="Default Image"
          />
          <img
            src={backImage}
            className="w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-in-out"
            alt="Hovered Image"
          />

          <div
            className={`absolute top-6 right-11 mt-3 -translate-y-5 ${heartHover && "group-hover:translate-x-2"} transition-all duration-500 ease-in-out  transition-all duration-500 ease-in-out`}>
            <span
              className={`relative bg-[#212529] text-white px-2 py-1 rounded text-sm me-2 opacity-0 ${heartHover && "group-hover:opacity-100"}  transition-all duration-300 ease-in-out`}>
              Add Wishlist
              <div className="absolute top-1/2 right-[-6px] transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-[#212529] border-y-[6px] border-y-transparent"></div>
            </span>
          </div>
          <div className="absolute top-6 right-1 mt-2.5">
            <button
              onMouseEnter={() => setHeartHover(true)}
              onMouseLeave={() => setHeartHover(false)}
              className="flex items-center justify-center rounded-[100px] w-8 h-8 border-[0.5px] border-slate-300 hover:bg-[#2b38d1] hover:text-[#fff] text-[#515d66] opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500 ease-out">
              <IoHeartOutline />
            </button>
          </div>
          <div
            className={`absolute top-16 right-11 mt-3 -translate-y-5 ${stackHover && "group-hover:translate-x-2"} transition-all duration-500 ease-in-out`}>
            <span
              className={`relative bg-[#212529] text-white px-2 py-1 rounded text-sm me-2 opacity-0 ${stackHover && "group-hover:opacity-100"}  transition-all duration-300 ease-in-out`}>
              Add Compare
              <div className="absolute top-1/2 right-[-6px] transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-[#212529] border-y-[6px] border-y-transparent"></div>
            </span>
          </div>
          <div className="absolute top-16 right-1 mt-2.5 ">
            <button
              onMouseEnter={() => setStackHover(true)}
              onMouseLeave={() => setStackHover(false)}
              className="flex items-center justify-center rounded-[100px] w-8 h-8 border-[0.5px] border-slate-300 hover:bg-[#2b38d1] hover:text-[#fff] text-[#515d66] opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500 ease-out">
              <StackIcon />
            </button>
          </div>
          <div
            className={`absolute top-24 right-11 mt-3 -translate-y-3.5 ${eyeHover && "group-hover:translate-x-2"} transition-all duration-500 ease-in-out`}>
            <span
              className={`relative bg-[#212529] text-white px-2 py-1 rounded text-sm me-2 opacity-0 ${eyeHover && "group-hover:opacity-100"} transition-all duration-300 ease-in-out`}>
              Quick View
              <div className="absolute top-1/2 right-[-6px] transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-[#212529] border-y-[6px] border-y-transparent"></div>
            </span>
          </div>
          <div className=" absolute top-24 right-1 mt-4 ">
            <button
              onMouseEnter={() => setEyeHover(true)}
              onMouseLeave={() => setEyeHover(false)}
              className="flex items-center justify-center rounded-[100px] w-8 h-8 border-[0.5px] border-slate-300 hover:bg-[#2b38d1] hover:text-[#fff] text-[#515d66] opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500 ease-out">
              <EyeOpenIcon />
            </button>
          </div>
        </a>

        <div className="flex flex-col col-span-7 md:col-span-6 justify-center items-start">
          <a
            href={to}
            className=" text-[#212529] hover:text-[blue]  text-[16px] font-bold transition-all ease-out text-start">
            {name}
          </a>
          <p className="hover:text-[red] text-lg text-start font-bold transition-all ease-out flex  mt-2 ms-[-2px]">
            {Array(fullStars)
              .fill(0)
              .map((_, index) => (
                <FaStar
                  key={`full-${index}`}
                  color="#FFB800"
                  width="20px"
                  height="20px"
                />
              ))}
            {halfStars === 1 && (
              <FaStarHalfAlt color="#FFB800" width="20px" height="20px" />
            )}
            {Array(emptyStars)
              .fill(0)
              .map((_, index) => (
                <FaRegStar
                  key={`empty-${index}`}
                  color="#FFB800"
                  width="20px"
                  height="20px"
                />
              ))}
            <div className="flex items-center overflow-hidden whitespace-nowrap">
              <span className="ms-2 text-[16px] text-[#515d66]">
                {formatNumber(reviews)} reviews
              </span>
            </div>
          </p>
          <p className="text-[20px] text-[#2b38d1] font-bold">
            {formatPrice(price)}
          </p>
          <div
            className={`flex text-[16px] justify-center ${inStock ? "text-green" : "text-red"}  items-center gap-1 mt-2 ms-[-2px]`}>
            <CheckIcon width={"20px"} height={"20px"} />
            <p>{inStock ? "In Stock" : "Out of Stock"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSellingCard;
