import { trans } from "@mongez/localization";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type VisibleSections = {
  about: boolean;
  information: boolean;
  quick: boolean;
  news: boolean;
};

export default function Footer() {
  const [visibleSections, setVisibleSections] = useState<VisibleSections>({
    about: true,
    information: true,
    quick: true,
    news: true,
  });

  const toggleVisibility = (section: keyof VisibleSections) => {
    if (window.innerWidth < 768) {
      setVisibleSections(prevState => ({
        ...prevState,
        [section]: !prevState[section],
      }));
    }
  };

  return (
    <div className="bg-white min-h-80 px-2 pt-8 mx-auto ">
      <div className="bg-borderLight h-px mt-8 mb-8"></div>
      {/* <a href="/cart">cart</a> */}
      <div className="flex justify-between flex-col md:flex-row md:flex-wrap  lg:flex-nowrap items-start max-w-full">
        <div className="my-4 mx-auto bg-lightGray px-5 py-3 rounded-md mb-3 md:bg-transparent w-full md:w-[42%] lg:w-[30%]">
          <h3
            className="uppercase font-bold text-sm text-primary
               flex justify-between items-center"
            onClick={() => toggleVisibility("about")}>
            <span> {trans("aboutTheStore")} </span>
            <span className="flex items-center md:hidden text-lg text-center">
              {visibleSections.about ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </h3>
          <div
            className={`transition-all duration-500 ease-in-out flex  flex-col items-start mt-3 ${
              visibleSections.about
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}>
            <p className="text-gray font-medium text-sm leading-8">
              {trans("gotQuestion")}
            </p>
            <a
              href="#"
              className="text-blue text-4xl font-medium leading-9 mb-5 block">
              <p>+222-1800-262</p>
            </a>
            <p className="font-medium text-sm leading-6 text-gray text-start">
              268 St, South New York/NY 98944, United States
            </p>
            <p className="font-medium text-sm leading-6 text-gray">
              Customersupport@example.com
            </p>
            <a
              href="mailto:Aloshopify@alothemes.com"
              className="font-medium text-sm leading-6 text-gray">
              Aloshopify@alothemes.com
            </a>
          </div>
        </div>

        <div className="my-4 mx-auto bg-lightGray px-5 py-3 rounded-md mb-3  md:bg-transparent w-full md:max-w-[42%] lg:w-[15%]">
          <h3
            className="uppercase font-bold text-sm text-primary
               flex justify-between items-center"
            onClick={() => toggleVisibility("information")}>
            <span> {trans("information")} </span>
            <span className="flex items-center md:hidden text-lg text-center">
              {visibleSections.information ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </span>
          </h3>
          <div
            className={`transition-all duration-500 ease-in-out flex ${
              visibleSections.information
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            } flex-col items-start mt-3`}>
            <p className="text-gray text-sm leading-8 text-start ">
              You have not selected the footer menu
            </p>
          </div>
        </div>

        <div className="my-4 mx-auto bg-lightGray px-5 py-3 rounded-md mb-3  md:bg-transparent w-full md:max-w-[42%] lg:w-[15%]">
          <h3
            className="uppercase font-bold text-sm text-primary
               flex justify-between items-center"
            onClick={() => toggleVisibility("quick")}>
            <span> {trans("quickLinks")} </span>
            <span className="flex items-center md:hidden text-lg text-center">
              {visibleSections.quick ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </h3>
          <div
            className={`transition-all duration-500 ease-in-out flex ${
              visibleSections.quick
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            } flex-col items-start mt-3`}>
            <p className="text-gray text-sm leading-8 text-start">
              You have not selected the footer menu
            </p>
          </div>
        </div>

        <div className="my-4 mx-auto bg-lightGray px-5 py-3 rounded-md mb-3  md:bg-transparent w-full md:w-[42%] lg:w-[30%]">
          <h3
            className="uppercase font-bold text-sm text-primary
               flex justify-between items-center"
            onClick={() => toggleVisibility("news")}>
            <span> {trans("newsletterSignup")} </span>
            <span className="flex items-center md:hidden text-lg text-center">
              {visibleSections.news ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </h3>
          <div
            className={`transition-all duration-500 ease-in-out flex ${
              visibleSections.news
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            } flex-col items-start mt-3`}>
            <p className="text-gray text-sm leading-8 md:max-w-80 text-start">
              {trans("join")}
            </p>

            <div className="w-full flex flex-col mobile:flex-row justify-start items-center my-4">
              <div className="w-full md:w-auto my-2 mx-1 flex-grow-[3] md:flex-grow-[2] ">
                <input
                  type="email"
                  placeholder={trans("yourEmail")}
                  className="w-full border-solid border-borderLight border-[1px] p-2 h-12 rounded-[50px] placeholder-black placeholder:text-sm focus:border-blue outline-none"
                />
              </div>
              <div className=" w-full md:w-auto flex-shrink mobile:max-w-36">
                <button className="w-full bg-blue text-white p-3 h-12 rounded-[50px] font-bold text-xs leading-4 uppercase ">
                  {trans("subscribe")}
                </button>
              </div>
            </div>

            <p className="text-gray text-sm leading-8 md:max-w-80 text-start">
              {trans("subscribeForUminex")}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-borderLight h-px mt-8 mb-8"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center my-6 mx-8">
        <div className="md:flex-1 text-start mb-4">
          <p className="font-medium text-sm leading-8 text-gray ">
            {trans("copyright")} &copy;{" "}
            <a href="#" className="text-blue font-semibold">
              Uminex {""}
            </a>
            {trans("allRights")}. {trans("powered")} {""}
            <a href="#" className="text-blue font-semibold">
              Alothemes.
            </a>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:flex-1 justify-end">
          <span className="mr-2 font-medium text-sm leading-8 text-gray mb-3">
            {trans("payment")}
          </span>
          <img
            className="h-auto block mb-3"
            src="https://demo-uminex.myshopify.com/cdn/shop/files/payment.png?v=1676023904&width=2000"
            alt="Payment Methods"
          />
        </div>
      </div>
    </div>
  );
}
