import { trans } from "@mongez/localization";
import React from "react";

import Breadcrumbs from "design-system/components/Breadcrumbs";
import { Separator } from "design-system/components/ui/separator";
import mainAboutImage from "shared/assets/images/img_about.webp";
import about1Image from "shared/assets/images/img_about_1.webp";
import about2Image from "shared/assets/images/img_about_2.webp";
import about3Image from "shared/assets/images/img_about_3.webp";

function _AboutPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-6">
      <Breadcrumbs title="About" />
      <div className="flex items-center flex-col gap-10 justify-center my-8 overflow-hidden">
        <div className="w-full max-w-[600px]">
          <p className="text-xs uppercase font-bold text-blue text-center">
            {trans("Welcome To Uminex")}
          </p>
          <h1 className="text-3xl font-semibold text-primary text-center">
            {trans("Our Perfect Store")}
          </h1>
          <p className="text-sm text-gray text-center">
            {trans("short_about_us")}
          </p>
        </div>
        <div className="overflow-hidden rounded-xl">
          <img
            loading="lazy"
            src={mainAboutImage}
            alt="About Image"
            className="w-full h-full max-h-[500px] transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5">
          <div className="flex flex-col items-center justify-center gap-1 w-full text-center">
            <h1 className="text-blue text-4xl font-bold">21K</h1>
            <p className="text-primary text-lg font-semibold">
              {trans("Products For Sale")}
            </p>
            <span className="text-sm text-gray font-medium">
              {trans(
                "Class aptent taciti sociosqu litora torquent per conubia",
              )}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 w-full text-center">
            <h1 className="text-blue text-4xl font-bold">21K</h1>
            <p className="text-primary text-lg font-semibold">
              {trans("Products For Sale")}
            </p>
            <span className="text-sm text-gray font-medium">
              {trans(
                "Class aptent taciti sociosqu litora torquent per conubia",
              )}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 w-full text-center">
            <h1 className="text-blue text-4xl font-bold">21K</h1>
            <p className="text-primary text-lg font-semibold">
              {trans("Products For Sale")}
            </p>
            <span className="text-sm text-gray font-medium">
              {trans(
                "Class aptent taciti sociosqu litora torquent per conubia",
              )}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 w-full text-center">
            <h1 className="text-blue text-4xl font-bold">21K</h1>
            <p className="text-primary text-lg font-semibold">
              {trans("Products For Sale")}
            </p>
            <span className="text-sm text-gray font-medium">
              {trans(
                "Class aptent taciti sociosqu litora torquent per conubia",
              )}
            </span>
          </div>
        </div>
        <Separator className="my-5" />
        <div className="w-full max-w-[600px]">
          <p className="text-xs uppercase font-bold text-blue text-center">
            {trans("Why Choose Us")}
          </p>
          <h1 className="text-3xl font-semibold text-primary text-center">
            {trans("Over 20 Years Of Experience")}
          </h1>
          <p className="text-sm text-gray text-center">
            {trans("short_about_us")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          <div className="flex flex-col items-start justify-start gap-3 rounded-xl w-full">
            <div className="overflow-hidden">
              <img
                loading="lazy"
                src={about1Image}
                alt=""
                className=" w-full h-[550px] transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h1 className="text-primary text-md uppercase font-bold">
              1. {trans("Perfect space")}
            </h1>
            <p className="text-gray text-sm font-medium">
              {trans("short_about_us")}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 rounded-xl w-full">
            <div className="overflow-hidden">
              <img
                loading="lazy"
                src={about2Image}
                alt=""
                className=" w-full h-[550px] transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h1 className="text-primary text-md uppercase font-bold">
              2. {trans("special person")}
            </h1>
            <p className="text-gray text-sm font-medium">
              {trans("short_about_us")}
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 rounded-xl w-full">
            <div className="overflow-hidden">
              <img
                loading="lazy"
                src={about3Image}
                alt=""
                className=" w-full h-[550px] transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h1 className="text-primary text-md uppercase font-bold">
              3. {trans("Modern Office")}
            </h1>
            <p className="text-gray text-sm font-medium">
              {trans("short_about_us")}
            </p>
          </div>
        </div>

        <Separator className="my-5" />

        <div className="w-full max-w-[600px]">
          <p className="text-xs uppercase font-bold text-blue text-center">
            {trans("Our perfect team")}
          </p>
          <h1 className="text-3xl font-semibold text-primary text-center">
            {trans("Amazing People")}
          </h1>
          <p className="text-sm text-gray text-center">
            {trans("short_about_us")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5">
          <div className="flex flex-col items-center justify-center gap-3 rounded-full text-center">
            <div className="overflow-hidden rounded-full">
              <img
                loading="lazy"
                src={
                  "https://demo-uminex.myshopify.com/cdn/shop/files/img_our_team_360x.png?v=1677665288"
                }
                alt=""
                className="w-[200px] h-[200px] rounded-full transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h1 className="text-primary text-sm font-semibold">
              {trans("Michael Antony")}
            </h1>
            <span className="text-sm text-gray">{"Founder/CEO"}</span>
            <p className="text-gray text-md">{trans("short_about_us")}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-full text-center">
            <div className="overflow-hidden rounded-full">
              <img
                loading="lazy"
                src={
                  "https://demo-uminex.myshopify.com/cdn/shop/files/img_our_team_3_360x.png?v=1677665306"
                }
                alt=""
                className="w-[200px] h-[200px] rounded-full transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h1 className="text-primary text-sm font-semibold">
              {trans("Alexandra Miller")}
            </h1>
            <span className="text-sm text-gray">{"Founder/CEO"}</span>
            <p className="text-gray text-md">{trans("short_about_us")}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-full text-center">
            <div className="overflow-hidden rounded-full">
              <img
                loading="lazy"
                src={
                  "https://demo-uminex.myshopify.com/cdn/shop/files/img_our_team_2_360x.png?v=1677665299"
                }
                alt=""
                className="w-[200px] h-[200px] rounded-full transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h1 className="text-primary text-sm font-semibold">
              {trans("Frank ge bruyne")}
            </h1>
            <span className="text-sm text-gray">{"Founder/CEO"}</span>
            <p className="text-gray text-md">{trans("short_about_us")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const AboutPage = React.memo(_AboutPage);
export default AboutPage;
