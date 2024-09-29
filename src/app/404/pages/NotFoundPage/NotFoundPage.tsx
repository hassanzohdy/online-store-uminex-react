import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";
import pageNotFoundImage from "../../../../shared/assets/images/404_540x.svg";

export default function NotFoundPage() {
  return (
    //TODO: @m_abosalem - add not found page
    <>
      <Helmet title={trans("notFoundPage")} />
      <div className="w-full max-w-[1450px] mx-auto px-4 py-4">
        <p>
          <span className="font-thin text-slate-400 text-sm">
            {trans("home")}
          </span>{" "}
          / 404
        </p>
      </div>

      <div className="flex flex-col justify-center items-center bg-white min-h-80 px-2 pt-8 mx-auto">
        <img
          loading="lazy"
          src={pageNotFoundImage}
          alt="PAGE NOT FOUND"
          className="w-[500px] my-10"
        />

        <h1 className="text-2xl md:text-7xl mb-4">{trans("message")}</h1>
        <p className="text-center text-slate-400 mb-16">{trans("action")}</p>

        <Link
          to="/"
          className="w-[200px] h-[40px] rounded-full bg-blue text-white px-4 py-2 uppercase">
          {trans("buttonText")}
        </Link>
      </div>
    </>
  );
}
