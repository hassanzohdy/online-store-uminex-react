import { trans } from "@mongez/localization";

export type BreadcrumbsProps = {
  title: string;
};
export default function Breadcrumbs({ title }: BreadcrumbsProps) {
  return (
    <div className="bg-red bg-[url(https://demo-uminex.myshopify.com/cdn/shop/files/bg_breadcrumbs_1920x.png?v=1684232545)] bg-center bg-cover h-[100px] lg:h-[190px] flex flex-col items-center justify-center mb-10">
      <h2 className="text-gray font-bold text-3xl">{trans(title)}</h2>
      <p className="text-white">
        {trans("Home")} / {trans(title)}
      </p>
    </div>
  );
}
