import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "app/utils/urls";

export type BreadcrumbsProps = {
  title: string;
  image?: boolean;
  center?: boolean;
};
export default function Breadcrumbs({
  title,
  image,
  center,
}: BreadcrumbsProps) {
  if (image) {
    return (
      <div className="bg-[url(https://demo-uminex.myshopify.com/cdn/shop/files/bg_breadcrumbs_1920x.png?v=1684232545)] bg-center bg-cover h-[100px] lg:h-[190px] flex flex-col items-center justify-center">
        <h2 className="text-gray font-bold text-3xl">{trans(title)}</h2>
        <p className="text-white">
          <Link to={URLS.home}>{trans("Home")}</Link>/ {trans(title)}
        </p>
      </div>
    );
  } else if (center) {
    return (
      <div className="flex flex-col items-center justify-center h-[100px] lg:h-[150px]">
        <h2 className="text-gray font-bold text-3xl">{trans(title)}</h2>
        <p className="text-primary">
          <Link to={URLS.home} className="text-darkGray">
            {trans("Home")}
          </Link>
          / {trans(title)}
        </p>
      </div>
    );
  } else {
    return (
      <p className="text-primary text-sm font-medium">
        <Link to={URLS.home} className="text-darkGray">
          {trans("Home")}
        </Link>{" "}
        / {trans(title)}
      </p>
    );
  }
}
